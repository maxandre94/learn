import { IsNotEmpty, IsString } from "class-validator";

export class CreateTacheDto {
    
    @IsString()
    @IsNotEmpty()
    titre!: string;
}