import { Profile } from 'src/users/entities/profile.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InterestPointItineraryOrder } from './interest-point-itinerary-order';
import { InterestPoint } from './interest-point.entity';

@Entity()
export class Itinerary {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Profile, (profile) => profile.itineraries, {eager:true})
  @JoinColumn()
  profile: Profile;
  
  @Column({length: 140, nullable: true})
  description: string;

  @OneToMany(() => InterestPointItineraryOrder, (interestPointItineraryOrder) => interestPointItineraryOrder.itinerary, {eager: true})
  interestPointItineraryOrder: InterestPointItineraryOrder[];

  @Column()
  title: string;

  @Column({default: 'https://arcturusgroup.com.br/wp-content/uploads/2014/07/paisagem-marco-zero-recife.gif'})
  imageUrl: string;
}
