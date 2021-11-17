import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInterestPointDto } from './dto/create-interest-point.dto';
import { UpdateInterestPointDto } from './dto/update-interest-point.dto';
import { InterestPoint } from './entities/interest-point.entity';
import { Itinerary } from './entities/itinerary.entity';

@Injectable()
export class InterestPointsService {
  constructor(
    @InjectRepository(InterestPoint)
    private usersRepository: Repository<InterestPoint>,
    @InjectRepository(Itinerary)
    private profilesRepository: Repository<Itinerary>,
  ) {}

  create(createInterestPointDto: CreateInterestPointDto) {
    return 'This action adds a new interestPoint';
  }

  findAll() {
    return `This action returns all interestPoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interestPoint`;
  }

  update(id: number, updateInterestPointDto: UpdateInterestPointDto) {
    return `This action updates a #${id} interestPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} interestPoint`;
  }
}
