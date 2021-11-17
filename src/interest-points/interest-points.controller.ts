import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InterestPointsService } from './interest-points.service';

@Controller('interest-points')
export class InterestPointsController {
  constructor(private readonly interestPointsService: InterestPointsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findInterestPoints(@Request() req) {
    return await this.interestPointsService.findInterestPoints(req.latitude,req.longitude);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get(':id/itineraries')
  async findItinerary(@Param('id') id: number) {
    return await this.interestPointsService.findOneItinerary(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('itineraries')
  async findItineraries(@Request() req) {
    return await this.interestPointsService.findItineraries(req.latitude, req.longitude);
  }
}
