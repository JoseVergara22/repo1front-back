import { Injectable } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personaje } from './entities/personaje.entity';

@Injectable()
export class PersonajesService {
  constructor(
    @InjectRepository(Personaje)
    private personajeRepo: Repository<Personaje>,
  ) {}

  async create(data: Partial<Personaje>) {
    const personaje = this.personajeRepo.create(data);
    return this.personajeRepo.save(personaje);
    //   const personaje = this.personajeRepo.create(data);
    //   return this.personajeRepo.save(personaje);
  }

  async findAll(): Promise<Personaje[]> {
    //console.log('aca', this.personajeRepo);
    const data = await this.personajeRepo.find();
    console.log('Datos obtenidos:', data);
    return data;
  }

  async findOne(id: number): Promise<Personaje> {
    const personaje = await this.personajeRepo.findOne({ where: { id } });
    if (!personaje) {
      throw new Error(`Personaje con id ${id} no encontrado.`);
    }
    return personaje;
  }

  async update(id: number, updatePersonajeDto: Partial<Personaje>) {
    const personaje = await this.personajeRepo.preload({
      id,
      ...updatePersonajeDto,
    });
    if (!personaje) {
      throw new Error(
        `No se pudo actualizar. Personaje con id ${id} no existe.`,
      );
    }
    return this.personajeRepo.save(personaje);
  }

  async remove(id: number) {
    const personaje = await this.findOne(id); // reutiliza findOne
    return this.personajeRepo.remove(personaje);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} personaje`;
  // }

  // update(id: number, updatePersonajeDto: UpdatePersonajeDto) {
  //   return `This action updates a #${id} personaje`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} personaje`;
  // }

  // create(createPersonajeDto: CreatePersonajeDto) {
  //   return 'This action adds a new personajeeeeeeeee';
  // }

  // findAll() {
  //   return `This action returns all personajes`;
  // }

  ///////
}
