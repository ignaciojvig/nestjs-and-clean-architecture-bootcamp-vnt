import { Module } from '@nestjs/common';
import { PresentationModule } from '@presentation/presentation.module';
import { DatabaseModule } from 'src/environment/database/database.module';

@Module({
  imports: [PresentationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
