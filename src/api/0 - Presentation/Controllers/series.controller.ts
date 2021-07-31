import { Series } from '@domain/Entities/series.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SeriesCreateAndEditViewModel } from '@presentation/View Models/Series View Models/seriesCreateAndEdit.viewmodel';
import { SeriesListViewModel } from '@presentation/View Models/Series View Models/seriesList.viewmodel';
import { SeriesService } from '@services/Series/series.service';

@Controller('series')
export class SeriesController {
  constructor(private seriesService: SeriesService) {}

  @Get()
  async getAllSeries(): Promise<SeriesListViewModel[]> {
    const seriesList = await this.seriesService.getAllSeries();
    return seriesList.map((x) => new SeriesListViewModel(x));
  }

  @Post()
  async createSeries(
    @Body() newSeriesViewModel: SeriesCreateAndEditViewModel,
  ): Promise<Series> {
    const newSeries = new Series(
      newSeriesViewModel.name,
      newSeriesViewModel.numberOfSeasons,
      newSeriesViewModel.numberOfEpisodes,
      newSeriesViewModel.rottenTomatoesRating,
    );

    return await this.seriesService.createSeries(newSeries);
  }
}
