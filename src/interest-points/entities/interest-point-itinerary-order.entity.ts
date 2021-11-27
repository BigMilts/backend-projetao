import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InterestPoint } from './interest-point.entity';
import { Itinerary } from './itinerary.entity';

@Entity()
export class InterestPointItineraryOrder {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Itinerary, (itinerary) => itinerary.interestPointItineraryOrder)
  @JoinColumn()
  itinerary: Itinerary;

  @OneToOne(() => InterestPoint, (interestPoint) => interestPoint.itineraryOrder, {eager: true})
  interestPoint: InterestPoint;

  @Column()
  order: number;
}
