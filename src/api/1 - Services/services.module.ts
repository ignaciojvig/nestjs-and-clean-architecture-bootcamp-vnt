import { DependencyInjectionTokens } from '@core/IoC Crosscutting/di.tokens';
import { Series } from '@domain/Entities/series.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesService } from '@services/Series/series.service';

@Module({
  imports: [TypeOrmModule.forFeature([Series])],
  providers: [
    {
      provide: DependencyInjectionTokens.ISeriesServiceInterface,
      useClass: SeriesService,
    },
  ],
  exports: [
    {
      provide: DependencyInjectionTokens.ISeriesServiceInterface,
      useClass: SeriesService,
    },
  ],
})
export class ServicesModule {}
