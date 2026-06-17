import { Injectable } from '@nestjs/common';
import type { Tache } from './tache.interface';
import { UpdateTacheDto } from './dto/update-tache.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TachesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Tache[]> {
    return this.prisma.tache.findMany();
  }

  async findOne(id: number): Promise<Tache | null> {
    return this.prisma.tache.findUnique({ where: { id } });
  }

  async create(titre: string): Promise<Tache> {
    return this.prisma.tache.create({ data: { titre } });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.tache.delete({ where: { id } });
  }

  async update(id: number, dto: UpdateTacheDto): Promise<Tache | null> {
    return this.prisma.tache.update({ where: { id }, data: { ...dto } });
  }
}
