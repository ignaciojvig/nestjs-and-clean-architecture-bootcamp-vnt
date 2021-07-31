import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Series {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  numberOfSeasons: number;

  @Column()
  numberOfEpisodes: number;

  @Column({ default: 0 })
  rottenTomatoesRating: number;

  constructor(
    name: string,
    numberOfSeasons: number,
    numberOfEpisodes: number,
    rottenTomatoesRating: number,

    id?: string,
  ) {
    this.name = name;
    this.numberOfSeasons = numberOfSeasons;
    this.numberOfEpisodes = numberOfEpisodes;
    this.rottenTomatoesRating = rottenTomatoesRating;

    this.id = id;
  }
}
