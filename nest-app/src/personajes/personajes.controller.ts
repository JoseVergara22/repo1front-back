import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
import { Personaje } from './entities/personaje.entity';

@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @Post()
  create(@Body() dto: CreatePersonajeDto): Promise<Personaje> {
    return this.personajesService.create(dto);
    // create(@Body() createPersonajeDto: CreatePersonajeDto) {
    //   //return this.personajesService.create(createPersonajeDto);
    // }
  }

  @Get()
  findAll() {
    return this.personajesService.findAll();
  }
  @Get('with-skills')
  findAllWithSkills() {
    return this.personajesService.findAllWithSkills();

    //return "Holaaaa aca con skilss desde controlador"
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePersonajeDto,
  ): Promise<Personaje> {
    return this.personajesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Personaje> {
    return this.personajesService.remove(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Personaje> {
    //return this.personajesService.findOne(+id);
    const idNum = parseInt(id, 10);
    if (isNaN(idNum)) {
      throw new BadRequestException('El ID debe ser un número válido');
    }
    return this.personajesService.findOne(idNum);
  }

  @Get('with-skills/:id')
  async findOneWithSkills(@Param('id') id: string): Promise<Personaje> {
    const idNum = parseInt(id, 10);
    if (isNaN(idNum)) {
      throw new BadRequestException('El ID debe ser un número válido');
    }
    return this.personajesService.findOneWithSkills(idNum);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personajesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonajeDto: UpdatePersonajeDto) {
  //   return this.personajesService.update(+id, updatePersonajeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personajesService.remove(+id);
  // }
}
