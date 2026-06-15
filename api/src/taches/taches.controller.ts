import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TachesService } from './taches.service';
import { Tache } from './tache.interface';

@Controller('taches')
export class TachesController {
  constructor(private readonly tachesService: TachesService) {}

  @Get()
  findAll(): Tache[] {
    return this.tachesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Tache | undefined {
    return this.tachesService.findOne(+id);
  }

  @Post()
  create(@Body('titre') titre: string): Tache | undefined {
    return this.tachesService.create(titre);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tachesService.remove(+id);
  }
}
