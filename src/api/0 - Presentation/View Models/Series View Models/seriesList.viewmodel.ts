import { Series } from '@domain/Entities/series.entity';
import { ApiProperty } from '@nestjs/swagger';

export class SeriesListViewModel {
  @ApiProperty({
    format: 'uuid',
    example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  })
  id: string;

  @ApiProperty({
    maxLength: 50,
    example: 'Game of Thrones',
  })
  name: string;

  @ApiProperty({
    example: 8,
  })
  numberOfSeasons: number;

  @ApiProperty({
    example: 0.89,
  })
  rottenTomatoesRating: number;

  constructor(series: Series) {
    this.id = series.id;
    this.name = series.name;
    this.numberOfSeasons = series.numberOfSeasons;
    this.rottenTomatoesRating = series.rottenTomatoesRating;
  }
}
