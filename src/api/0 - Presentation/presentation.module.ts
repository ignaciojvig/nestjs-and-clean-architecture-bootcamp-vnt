import { Module } from '@nestjs/common';
import { SeriesController } from '@presentation/Controllers/series.controller';
import { ServicesModule } from '@services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [SeriesController],
})
export class PresentationModule {}
