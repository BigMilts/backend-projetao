import { Controller, Get, Param, Request } from '@nestjs/common';
import { InterestPointsService } from './interest-points.service';

@Controller('interest-points')
export class InterestPointsController {
  constructor(private readonly interestPointsService: InterestPointsService) {}

  @Get()
  async findInterestPoints(@Request() req) {
    return await this.interestPointsService.findInterestPoints(req.latitude,req.longitude);
  }
  
  @Get(':id/itineraries')
  async findItinerary(@Param('id') id: number) {
    return await this.interestPointsService.findOneItinerary(+id);
  }

  @Get('itineraries')
  async findItineraries(@Request() req) {
    return await this.interestPointsService.findItineraries(req.latitude, req.longitude);
  }
}
