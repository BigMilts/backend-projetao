import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itinerary } from './itinerary.entity';

@Entity()
export class InterestPoint {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  history: string;

  @Column()
  badge: string;

  @Column()
  badgeUrl: string;

  @ManyToOne(() => Itinerary, (itinerary) => itinerary.interestPoints)
  itinerary: Itinerary;
}
