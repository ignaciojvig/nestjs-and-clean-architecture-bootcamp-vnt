import { Series } from '@domain/Entities/series.entity';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ISeriesServiceInterface } from '@services/Series/iseries.interface.service';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService implements ISeriesServiceInterface {
  constructor(
    @InjectRepository(Series) private seriesRepository: Repository<Series>,
  ) {}

  async getAllSeries(): Promise<Series[]> {
    return await this.seriesRepository.find();
  }

  async createSeries(newSeries: Series): Promise<Series> {
    return await this.seriesRepository.save(newSeries);
  }

  async getMibMovie(mibId: string): Promise<Series> {
    const mibMovie = await this.seriesRepository.findOne({ id: mibId });

    if (!mibMovie) {
      throw new UnprocessableEntityException('mibmovie-not-existent');
    }

    return mibMovie;
  }
}
