import { Profile } from 'src/users/entities/profile.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(() => InterestPoint, (interestPoint) => interestPoint.itinerary, {eager: true})
  interestPoints: InterestPoint[];
}
