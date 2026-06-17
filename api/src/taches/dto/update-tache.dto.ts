import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateTacheDto {

    @IsOptional()
    @IsString()
    titre?: string;

    @IsOptional()
    @IsBoolean()
    complete?: boolean;
}