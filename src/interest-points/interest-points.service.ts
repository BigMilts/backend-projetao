import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterestPoint } from './entities/interest-point.entity';
import { Itinerary } from './entities/itinerary.entity';

@Injectable()
export class InterestPointsService {
  constructor(
    @InjectRepository(InterestPoint)
    private interestPointsRepository: Repository<InterestPoint>,
    @InjectRepository(Itinerary)
    private itinerariesRepository: Repository<Itinerary>,
  ) {}

  async findInterestPoints() {
    return this.interestPointsRepository.find();
  }

  async findItineraries() {
    return this.itinerariesRepository.find();
  }
}
