import { Module } from '@nestjs/common';
import { InterestPointsService } from './interest-points.service';
import { InterestPointsController } from './interest-points.controller';
import { InterestPoint } from './entities/interest-point.entity';
import { Itinerary } from './entities/itinerary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestPointItineraryOrder } from './entities/interest-point-itinerary-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterestPoint, Itinerary, InterestPointItineraryOrder])],
  controllers: [InterestPointsController],
  providers: [InterestPointsService],
  exports: [InterestPointsService],
})
export class InterestPointsModule {}
