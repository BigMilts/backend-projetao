import { InterestPoint } from 'src/interest-points/entities/interest-point.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @Column({nullable: true})
  name: string;

  @Column({nullable: true})
  profilePicture: string;

  @Column({ default: 0 })
  experience: number;

  @Column({ default: false })
  historian: boolean;

  @ManyToMany(() => InterestPoint)
  @JoinTable()
  interestPoints: InterestPoint[];

  @ManyToOne(() => Profile)
  profile: Profile;
}
