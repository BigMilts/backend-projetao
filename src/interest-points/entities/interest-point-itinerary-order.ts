import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itinerary } from './itinerary.entity';

@Entity()
export class InterestPointItineraryOrder {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Itinerary, (itinerary) => itinerary.interestPointItineraryOrder)
  @JoinColumn()
  itineraryId: number;

  @OneToOne()
  @JoinColumn()
  interestPointId: number;

  @Column()
  order: number;
}
