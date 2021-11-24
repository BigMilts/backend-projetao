import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { InterestPoint } from './entities/interest-point.entity';
import { Itinerary } from './entities/itinerary.entity';

// TODO: falta filtrar de acordo com o perfil do usuário
@Injectable()
export class InterestPointsService {
  constructor(
    @InjectRepository(InterestPoint)
    private interestPointsRepository: Repository<InterestPoint>,
    @InjectRepository(Itinerary)
    private itinerariesRepository: Repository<Itinerary>,
  ) {}

  async findInterestPoints(latitude: number, longitude: number, radius = 30) {
    const interestPoints = await getConnection()
    .createQueryBuilder()
    .select('ip')
    .from(InterestPoint, 'ip')
    .leftJoinAndSelect('ip.itinerary', 'i')
    .leftJoinAndSelect('i.profile', 'p')
    .getMany();

    const closeInterestPoints: InterestPoint[] = [];

    for (let i = 0; i < interestPoints.length; i++) {
      const interestPoint = interestPoints[i];
      if (
        this.checkItemsInUserRadius(
          latitude,
          longitude,
          interestPoint.latitude,
          interestPoint.longitude,
        ) < radius
      ) {
        closeInterestPoints.push(interestPoint);
      }
    }

    return interestPoints;
  }

  async findItineraries(latitude: number, longitude: number) {
    const interestPoints = await this.findInterestPoints(
      latitude,
      longitude,
      1000,
    );

    const itinerariesIds: number[] = [];
    const closeItineraries: Itinerary[] = [];
    for (let i = 0; i < interestPoints.length; i++) {
      const interestPoint = interestPoints[i];
      if (interestPoint.itinerary !== undefined && interestPoint.itinerary !== null && !(itinerariesIds.includes(interestPoint.itinerary.id))) {
        closeItineraries.push(interestPoint.itinerary);
        itinerariesIds.push(interestPoint.itinerary.id)
      }
    }

    return closeItineraries;
  }

  checkItemsInUserRadius(la1: number, lo1: number, la2: number, lo2: number) {
    const R = 6371e3; // metres
    const φ1 = (la1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (la2 * Math.PI) / 180;
    const Δφ = ((la2 - la1) * Math.PI) / 180;
    const Δλ = ((lo2 - lo1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres

    return d;
  }

  async findOneItinerary(id: number) {
    const itinerary = await this.itinerariesRepository.findOne(id);
    return itinerary;
  }
}
