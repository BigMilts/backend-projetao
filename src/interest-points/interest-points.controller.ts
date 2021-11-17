import { Controller, Get, Request } from '@nestjs/common';
import { InterestPointsService } from './interest-points.service';

@Controller('interest-points')
export class InterestPointsController {
  constructor(private readonly interestPointsService: InterestPointsService) {}

  @Get('interest-points')
  async findInterestPoints(@Request() req) {
    return await this.interestPointsService.findInterestPoints(
      req.latitude,
      req.longitude,
    );
  }

  @Get('itineraries')
  async findItineraries(@Request() req) {
    return await this.interestPointsService.findItineraries(
      req.latitude,
      req.longitude,
    );
  }
}
