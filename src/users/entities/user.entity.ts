import { InterestPoint } from 'src/interest-points/entities/interest-point.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

// TODO: não lembro o que são os selos no desenho do BD
@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  profilePicture: string;

  @Column()
  profile: string;

  @Column()
  experience: number;

  @Column({ default: false })
  historian: boolean;

  @ManyToMany(() => InterestPoint)
  @JoinTable()
  interestPoints: InterestPoint[];

  @ManyToMany(() => Profile)
  @JoinTable()
  profiles: Profile[];
}
