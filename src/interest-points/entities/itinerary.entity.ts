import { Profile } from 'src/users/entities/profile.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InterestPoint } from './interest-point.entity';

@Entity()
export class Itinerary {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Profile, (profile) => profile.itineraries)
  profile: Profile;

  @OneToMany(() => InterestPoint, (interestPoint) => interestPoint.itinerary)
  interestPoints: InterestPoint[];
}
