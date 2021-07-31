import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class SeriesCreateAndEditViewModel {
  @ApiProperty({
    maxLength: 50,
    example: 'Game of Thrones',
  })
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty({
    example: 8,
  })
  @IsNotEmpty()
  numberOfSeasons: number;

  @ApiProperty({
    example: 73,
  })
  @IsNotEmpty()
  numberOfEpisodes: number;

  @ApiProperty({
    example: 0.89,
  })
  rottenTomatoesRating: number;
}
