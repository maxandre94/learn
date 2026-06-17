import { Module } from '@nestjs/common';
import { TachesController } from './taches.controller';
import { TachesService } from './taches.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TachesController],
  providers: [TachesService],
  imports: [PrismaModule]
})
export class TachesModule {}
