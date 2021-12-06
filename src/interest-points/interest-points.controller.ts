import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InterestPoint } from './entities/interest-point.entity';
import { Itinerary } from './entities/itinerary.entity';
import { InterestPointsService } from './interest-points.service';

@ApiTags('interest-points')
@Controller('interest-points')
export class InterestPointsController {
  constructor(private readonly interestPointsService: InterestPointsService) {}

  // @UseGuards(JwtAuthGuard)
  @ApiResponse({type: InterestPoint})
  @Get()
  async findInterestPoints(@Request() req) {
    return await this.interestPointsService.findInterestPoints(req.latitude,req.longitude);
  }
  
  // @UseGuards(JwtAuthGuard)
  @ApiResponse({type: Itinerary})
  @Get(':id/itineraries')
  async findItinerary(@Param('id') id: number) {
    return await this.interestPointsService.findOneItinerary(+id);
  }

  // @UseGuards(JwtAuthGuard)
  @ApiResponse({type: [Itinerary]})
  @Get('itineraries')
  async findItineraries(@Request() req) {
    return await this.interestPointsService.findItineraries(req.body.latitude, req.body.longitude);
  }

  @ApiResponse({})
  @Get('favorite/:id')
  async favoriteInterestPoint(@Param('id') id: number) {
    await this.interestPointsService.favorite(id);
    await this.interestPointsService.addLike(id);
    const ip = await this.interestPointsService.findOneInterestPoint(id);
    console.log(ip);
    return ip
  }
}
