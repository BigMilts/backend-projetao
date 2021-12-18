import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InterestPointItineraryOrder } from './interest-point-itinerary-order.entity';

@ApiTags('InterestPoint')
@Entity()
export class InterestPoint {
  @ApiProperty({name: 'id'})
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({name: 'latitude'})
  @Column({type: 'float'})
  latitude: number;

  @ApiProperty({name: 'longitude'})
  @Column({type: 'float'})
  longitude: number;

  @ApiProperty({name: 'category'})
  @Column()
  category: string;

  @ApiProperty({name: 'name'})
  @Column()
  name: string;

  @ApiProperty({name: 'description'})
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({name: 'badge'})
  @Column({'nullable': true})
  badge: string;

  @ApiProperty({name: 'badgeUrl'})
  @Column({default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLKnRV9oXShszNiRrzTq09jmCBAA2xGICDA&usqp=CAU'})
  badgeUrl: string;

  @ApiProperty({name: 'likes', type: Number})
  @Column({default: 2})
  likes: number;

  @ApiProperty({name: 'isFavorite', type: Boolean})
  @Column({default: false})
  isFavorite: boolean;

  @ApiProperty({name: 'isFavorite', type: Boolean})
  @Column({default: false})
  isUnlocked: boolean;

  @ApiProperty({name: 'imageUrl'})
  @Column({default: 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif'})
  imageUrl: string;

  @ApiProperty({name: 'itineraryOrder'})
  @OneToOne(() => InterestPointItineraryOrder, (interestPointItineraryOrder) => interestPointItineraryOrder.interestPoint)
  @JoinColumn()
  itineraryOrder: InterestPointItineraryOrder;
}
