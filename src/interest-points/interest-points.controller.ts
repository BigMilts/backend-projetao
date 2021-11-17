import { Controller, Get } from '@nestjs/common';
import { InterestPointsService } from './interest-points.service';

@Controller('interest-points')
export class InterestPointsController {
  constructor(private readonly interestPointsService: InterestPointsService) {}

  @Get('interest-points')
  async findInterestPoints() {
    return await this.interestPointsService.findInterestPoints();
  }

  @Get('itineraries')
  async findItineraries() {
    return await this.interestPointsService.findItineraries();
  }
}
