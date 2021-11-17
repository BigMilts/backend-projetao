import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestPoint } from 'src/interest-points/entities/interest-point.entity';
import { Itinerary } from 'src/interest-points/entities/itinerary.entity';
import { InterestPointsService } from 'src/interest-points/interest-points.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
    private interestPointsService: InterestPointsService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async addInterestPointToUser(id: number, interestPoint: InterestPoint) {
    const user = await this.usersRepository.findOne(id);
    user.interestPoints.push(interestPoint);
    await this.usersRepository.save(user);
  }

  async addExperienceToUser(id: number) {
    const user = await this.usersRepository.findOne(id);
    user.experience += 100;
    await this.usersRepository.save(user);
  }

  async changeUserTouristProfile(id: number, profileId: number) {
    const user = await this.usersRepository.findOne(id);
    const profile = await this.profilesRepository.findOne(profileId)
    user.profile = profile;
    await this.usersRepository.save(user);
  }

  async getItinerariesForProfile(id: number, lat: number, lon: number): Promise<Itinerary[]> {
    const user = await this.usersRepository.findOne(id);
    const itineraries = await this.interestPointsService.findItineraries(lat, lon);

    const itinerariesForUser: Itinerary[] = [];
    for (let i = 0; i < itineraries.length; i++) {
      const itinerary = itineraries[i];
      if (itinerary.profile === user.profile) {
        itinerariesForUser.push(itinerary)
      }
    }
    
    return itinerariesForUser
  }
}
