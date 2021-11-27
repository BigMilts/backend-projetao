import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Profile } from 'src/users/entities/profile.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InterestPointItineraryOrder } from './interest-point-itinerary-order.entity';

@ApiTags('Itineraries')
@Entity()
export class Itinerary {
  @ApiProperty({name:'id'})
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({name:'profile'})
  @ManyToOne(() => Profile, (profile) => profile.itineraries, {eager:true})
  @JoinColumn()
  profile: Profile;

  @ApiProperty({name:'title'})
  @Column({default: 'Placeholder title'})
  title: string;
  
  @ApiProperty({name:'description'})
  @Column({length: 140, nullable: true})
  description: string;

  @ApiProperty({name:'interestPointItineraryOrder'})
  @OneToMany(() => InterestPointItineraryOrder, (interestPointItineraryOrder) => interestPointItineraryOrder.itinerary, {eager: true})
  interestPointItineraryOrder: InterestPointItineraryOrder[];

  @ApiProperty({name:'imageUrl'})
  @Column({default: 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif'})
  imageUrl: string;
}
