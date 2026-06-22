import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TachesModule } from './taches/taches.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TachesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
