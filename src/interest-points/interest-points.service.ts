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

  async findInterestPoints(latitude: number = -8.06314, longitude: number = -34.87113, radius = 30) {
    const interestPoints = await getConnection()
    .createQueryBuilder()
    .select('ip')
    .from(InterestPoint, 'ip')
    // .leftJoinAndSelect('ip.itinerary', 'i')
    // .leftJoinAndSelect('i.profile', 'p')
    .getMany();

    const closeInterestPoints: InterestPoint[] = [];

    // for não utilizado
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

  async findItineraries(latitude: number = -8.06314, longitude: number = -34.87113) {
    // const interestPoints = await this.findInterestPoints(
    //   latitude,
    //   longitude,
    //   10000,
    // );

    // const itinerariesIds: number[] = [];
    // const closeItineraries: Itinerary[] = [];
    // for (let i = 0; i < interestPoints.length; i++) {
    //   const interestPoint = interestPoints[i];
    //   if (interestPoint.itinerary !== undefined && interestPoint.itinerary !== null && !(itinerariesIds.includes(interestPoint.itinerary.id))) {
    //     closeItineraries.push(interestPoint.itinerary);
    //     itinerariesIds.push(interestPoint.itinerary.id)
    //   }
    // }

    // return closeItineraries;
    return await getConnection()
    .createQueryBuilder()
    .select('i')
    .from(Itinerary, 'i')
    .leftJoinAndSelect('i.profile', 'p')
    .leftJoinAndSelect('i.interestPointItineraryOrder', 'order')
    .leftJoinAndSelect('order.interestPoint', 'ip')
    .getMany();
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

  async favorite(id: number) {
    const interestPoint = await this.interestPointsRepository.findOne(id);
    interestPoint.isFavorite = !interestPoint.isFavorite;
    await this.interestPointsRepository.save(interestPoint);
  }

  async addLike(id: number) {
    const interestPoint = await this.interestPointsRepository.findOne(id);
    if (interestPoint.isFavorite === true) {
      interestPoint.likes += 1;
    } else {
      interestPoint.likes -= 1;
    }
    await this.interestPointsRepository.save(interestPoint);
  }

  async findOneInterestPoint(id: number) {
    return await this.interestPointsRepository.findOne(id);
  }

  async unlock(id: number) {
    const interestPoint = await this.interestPointsRepository.findOne(id);
    interestPoint.isUnlocked = true;
    await getConnection().manager.save(interestPoint);
  }

  async getStamps() {
    return await this.interestPointsRepository.find({where: {isUnlocked: true}})
  }
}
