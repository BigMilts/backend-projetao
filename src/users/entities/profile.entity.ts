import { Itinerary } from 'src/interest-points/entities/itinerary.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  category: string;

  @OneToMany(() => Itinerary, (itinerary) => itinerary.profile)
  itineraries: Itinerary[];
}
