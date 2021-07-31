import { DependencyInjectionTokens } from '@core/IoC Crosscutting/di.tokens';
import { Series } from '@domain/Entities/series.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthService } from '@services/JwtAuth/jwt-auth.service';
import { JwtAuthStrategy } from '@services/JwtAuth/jwt-auth.strategy';
import { jwtConstants } from '@services/JwtAuth/jwt.constants';
import { SeriesService } from '@services/Series/series.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Series]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 100 },
    }),
  ],
  providers: [
    JwtAuthStrategy,
    JwtAuthService,
    {
      provide: DependencyInjectionTokens.ISeriesServiceInterface,
      useClass: SeriesService,
    },
  ],
  exports: [
    JwtAuthService,
    JwtAuthStrategy,
    {
      provide: DependencyInjectionTokens.ISeriesServiceInterface,
      useClass: SeriesService,
    },
  ],
})
export class ServicesModule {}
