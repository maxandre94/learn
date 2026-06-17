import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TachesService } from './taches.service';
import type { Tache } from './tache.interface';
import { CreateTacheDto } from './dto/create-tache.dto';
import { UpdateTacheDto } from './dto/update-tache.dto';

@Controller('taches')
export class TachesController {
  constructor(private readonly tachesService: TachesService) {}

  @Get()
  async findAll(): Promise<Tache[]> {
    return await this.tachesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tache | null> {
    return await this.tachesService.findOne(+id);
  }

  @Post()
  async create(@Body() createTacheDto: CreateTacheDto): Promise<Tache> {
    return await this.tachesService.create(createTacheDto.titre);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    return await this.tachesService.remove(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTacheDto: UpdateTacheDto): Promise<Tache | null> {
    return await this.tachesService.update(+id, updateTacheDto)
  }
}
