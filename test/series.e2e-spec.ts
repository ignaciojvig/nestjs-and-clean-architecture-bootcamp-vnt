import { DependencyInjectionTokens } from '@core/IoC Crosscutting/di.tokens';
import { Series } from '@domain/Entities/series.entity';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SeriesController } from '@presentation/Controllers/series.controller';
import { SeriesListViewModel } from '@presentation/View Models/Series View Models/seriesList.viewmodel';
import { SeriesService } from '@services/Series/series.service';
import { Repository } from 'typeorm';
import * as request from 'supertest';

describe('Series', () => {
  let app: INestApplication;

  const mockedUUID = '14da614a-6d80-41f0-8211-6e7889fdde96';

  const mockedSeries: Series = {
    id: mockedUUID,
    name: 'Breaking Bad',
    numberOfEpisodes: 32,
    numberOfSeasons: 6,
    rottenTomatoesRating: 0.98,
  };

  const mockedSeriesRepository = {
    find: () => [
      {
        id: mockedUUID,
        name: 'Umbrella Academy',
        numberOfSeasons: 3,
        numberOfEpisodes: 20,
        rottenTomatoesRating: 0.9,
      } as Series,
    ],
    save: (seriesToBeCreated: Series) => {
      return { id: mockedUUID, ...seriesToBeCreated };
    },
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SeriesController],
      providers: [
        {
          provide: DependencyInjectionTokens.ISeriesServiceInterface,
          useClass: SeriesService,
        },
        {
          provide: getRepositoryToken(Series),
          useFactory: () => mockedSeriesRepository,
        },
      ],
    })
      .overrideProvider(Repository)
      .useValue(mockedSeriesRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/GET Get all Series', () => {
    const seriesInViewModel = mockedSeriesRepository
      .find()
      .map((x) => new SeriesListViewModel(x));

    return request(app.getHttpServer()).get('/series').expect(200);
    // .expect(seriesInViewModel);
  });
});
