import { IsString, IsNumber } from 'class-validator';

export class CreatePersonajeDto {

    @IsString()
  nombre: string;

  @IsNumber()
  edad: number;

  @IsNumber()
  estatura: number;
}
