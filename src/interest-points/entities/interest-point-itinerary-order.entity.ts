import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InterestPoint } from './interest-point.entity';
import { Itinerary } from './itinerary.entity';

@ApiTags('InterestPointItineraryOrder')
@Entity()
export class InterestPointItineraryOrder {
  @ApiProperty({name: 'id'})
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({name: 'itinerary'})
  @ManyToOne(() => Itinerary, (itinerary) => itinerary.interestPointItineraryOrder)
  @JoinColumn()
  itinerary: Itinerary;

  @ApiProperty({name: 'interestPoint', type: () => InterestPoint})
  @OneToOne(() => InterestPoint, (interestPoint) => interestPoint.itineraryOrder, {eager: true})
  interestPoint: InterestPoint;

  @ApiProperty({name: 'order'})
  @Column()
  order: number;
}
