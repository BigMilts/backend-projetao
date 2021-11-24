import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itinerary } from './itinerary.entity';

@Entity()
export class InterestPoint {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'float'})
  latitude: number;

  @Column({type: 'float'})
  longitude: number;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  badge: string;

  @Column()
  badgeUrl: string;

  @ManyToOne(() => Itinerary, (itinerary) => itinerary.interestPoints)
  @JoinColumn()
  itinerary: Itinerary;
}
