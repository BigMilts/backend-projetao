import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InterestPointItineraryOrder } from './interest-point-itinerary-order.entity';

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

  @Column({default: 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif'})
  imageUrl: string;

  @ManyToOne(() => InterestPointItineraryOrder, (interestPointItineraryOrder) => interestPointItineraryOrder.interestPoint)
  @JoinColumn()
  itineraryOrder: InterestPointItineraryOrder;
}
