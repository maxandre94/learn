import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InscriptionDto } from './dto/inscription.dto';
import { ConnexionDto } from './dto/connexion.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async inscrire(dto: InscriptionDto) {
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { email: dto.email },
    });
    if (utilisateur !== null) throw new ConflictException('Email déjà utilisé');

    const mp = await bcrypt.hash(dto.motDePasse, 10);
    await this.prisma.utilisateur.create({
      data: { email: dto.email, motDePasse: mp },
    });
  }

  async connecter(dto: ConnexionDto) {
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { email: dto.email },
    });
    if(utilisateur===null) throw new UnauthorizedException('Utilisateur inexistant')
    
    const mp = await bcrypt.compare(dto.motDePasse, utilisateur.motDePasse)
    if(!mp) throw new UnauthorizedException('Mot de passe incorrect')
    
    return { access_token: this.jwtService.sign({ sub: utilisateur.id, email: utilisateur.email }) }
  }
}
