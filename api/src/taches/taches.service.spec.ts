import { Test, TestingModule } from '@nestjs/testing';
import { TachesService } from './taches.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TachesService', () => {
  let service: TachesService;
  const mockPrismaService = {
    tache: {
      findMany: jest.fn(), findUnique: jest.fn(), create: jest.fn(), update: jest.fn(), delete: jest.fn()
    }
  }

  const taches = [{ id: 1, titre: 'Test', complete: false }]

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TachesService, { provide: PrismaService, useValue: mockPrismaService }],
    }).compile();

    service = module.get<TachesService>(TachesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll() devrait retourner toutes les tâches', async () => {
    mockPrismaService.tache.findMany.mockResolvedValue(taches)
    const result = await service.findAll()
    expect(result).toEqual(taches)
  });

  it('findOne() devrait retourner une tâche par son id', async () => {
    const tache = { id: 1, titre: 'Test', complete: false }
    mockPrismaService.tache.findUnique.mockResolvedValue(tache)
    const result = await service.findOne(1)
    expect(result).toEqual(tache)
    expect(mockPrismaService.tache.findUnique).toHaveBeenCalledWith({ where: { id: 1 } })
  });

  it('create() devrait créer une tâche et la retourner', async () => {
    const tache = { id: 1, titre: 'Nouvelle tâche', complete: false }
    mockPrismaService.tache.create.mockResolvedValue(tache)
    const result = await service.create('Nouvelle tâche')
    expect(result).toEqual(tache)
    expect(mockPrismaService.tache.create).toHaveBeenCalledWith({ data: { titre: 'Nouvelle tâche' } })
  });

  it('update() devrait modifier une tâche et la retourner', async () => {
    const tache = { id: 1, titre: 'Nouvelle tâche', complete: false }
    mockPrismaService.tache.update.mockResolvedValue(tache)
    const result = await service.update(1, {titre: 'Tâche modifié', complete: true})
    expect(result).toEqual(tache)
    expect(mockPrismaService.tache.update).toHaveBeenCalledWith({ where: { id: 1 }, data: {titre: 'Tâche modifié', complete: true} })
  });

  it('remove() devrait supprimer une tâche par son id et ne rien retourner', async () => {
    await service.remove(1)
    expect(mockPrismaService.tache.delete).toHaveBeenCalledWith({  where: { id: 1 } })
  });
});
