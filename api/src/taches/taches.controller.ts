import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TachesService } from './taches.service';
import type { Tache } from './tache.interface';
import { CreateTacheDto } from './dto/create-tache.dto';
import { UpdateTacheDto } from './dto/update-tache.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('taches')
export class TachesController {
  constructor(private readonly tachesService: TachesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: any): Promise<Tache[]> {
    return await this.tachesService.findAll(req.user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tache | null> {
    return await this.tachesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTacheDto: CreateTacheDto, @Req() req: any): Promise<Tache> {
    return await this.tachesService.create(createTacheDto.titre, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    return await this.tachesService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTacheDto: UpdateTacheDto): Promise<Tache | null> {
    return await this.tachesService.update(+id, updateTacheDto)
  }
}
