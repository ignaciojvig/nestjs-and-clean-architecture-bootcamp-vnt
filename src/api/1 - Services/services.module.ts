import { Series } from '@domain/Entities/series.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesService } from '@services/Series/series.service';

@Module({
  imports: [TypeOrmModule.forFeature([Series])],
  providers: [SeriesService],
  exports: [SeriesService],
})
export class ServicesModule {}
