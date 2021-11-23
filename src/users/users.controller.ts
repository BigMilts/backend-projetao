import { Controller, Post, Body, Patch, Param, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async addInterestPointAndExperienceToUser(@Request() req) {
    await this.usersService.addInterestPointToUser(req.userId, req.interestPointId);
    await this.usersService.addExperienceToUser(req.userId);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('itineraries')
  async findItinerary(@Request() req) {
    return await this.usersService.getItinerariesForProfile(req.userId, req.lat, req.lon);
  }
  
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/profile')
  async updateUserProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }
}
