import { Controller, Post, Body, Patch, Param, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async addInterestPointAndExperienceToUser(@Request() req) {
    await this.usersService.addInterestPointToUser(req.userId, req.interestPointId);
    await this.usersService.addExperienceToUser(req.userId);
  }
  
  @Get('itineraries')
  async findItinerary(@Request() req) {
    return await this.usersService.getItinerariesForProfile(req.userId, req.lat, req.lon);
  }
  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Patch(':id/profile')
  async updateUserProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }
}
