import { Body, Controller, Post } from '@nestjs/common';
import { InscriptionDto } from './dto/inscription.dto';
import { ConnexionDto } from './dto/connexion.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('inscription')
  async inscription(@Body() inscriptionDto: InscriptionDto) {
    return await this.authService.inscrire(inscriptionDto);
  }

  @Post('connexion')
  async connexion(@Body() connexionDto: ConnexionDto) {
    return await this.authService.connecter(connexionDto);
  }
}
