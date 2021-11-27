import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Itinerary } from 'src/interest-points/entities/itinerary.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ApiTags('Profile')
@Entity()
export class Profile {
  @ApiProperty({name: 'id'})
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({name: 'category'})
  @Column()
  category: string;

  @ApiProperty({name: 'itineraries'})
  @OneToMany(() => Itinerary, (itinerary) => itinerary.profile)
  itineraries: Itinerary[];
}
