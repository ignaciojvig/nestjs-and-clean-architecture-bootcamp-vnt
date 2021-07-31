import { DependencyInjectionTokens } from '@core/IoC Crosscutting/di.tokens';
import { Series } from '@domain/Entities/series.entity';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { SeriesCreateAndEditViewModel } from '@presentation/View Models/Series View Models/seriesCreateAndEdit.viewmodel';
import { SeriesListViewModel } from '@presentation/View Models/Series View Models/seriesList.viewmodel';
import { ISeriesServiceInterface } from '@services/Series/iseries.interface.service';

@Controller('series')
export class SeriesController {
  constructor(
    @Inject(DependencyInjectionTokens.ISeriesServiceInterface)
    private seriesService: ISeriesServiceInterface,
  ) {}

  @Get()
  async getAllSeries(): Promise<SeriesListViewModel[]> {
    const seriesList = await this.seriesService.getAllSeries();
    return seriesList.map((x) => new SeriesListViewModel(x));
  }

  @Get(':id')
  async getMibMovie(@Param('id') mibMovieId: string): Promise<Series> {
    return await this.seriesService.getMibMovie(mibMovieId);
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
