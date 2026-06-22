import { IsEmail, IsString, MinLength } from "class-validator";

export class InscriptionDto {

    @IsEmail()
    email!: string;

    @MinLength(6)
    @IsString()
    motDePasse!: string;
}