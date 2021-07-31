import { Series } from '@domain/Entities/series.entity';

export interface ISeriesServiceInterface {
  getAllSeries(): Promise<Series[]>;
  createSeries(newSeries: Series): Promise<Series>;
}
