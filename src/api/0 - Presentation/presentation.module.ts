import { Module } from '@nestjs/common';
import { AuthController } from '@presentation/Controllers/auth.controller';
import { SeriesController } from '@presentation/Controllers/series.controller';
import { JwtAuthGuard } from '@presentation/Guards/jwt-auth.guard';
import { ServicesModule } from '@services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [JwtAuthGuard],
  controllers: [SeriesController, AuthController],
})
export class PresentationModule {}
