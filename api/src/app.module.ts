import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TachesModule } from './taches/taches.module';

@Module({
  imports: [TachesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
