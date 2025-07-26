import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Personaje } from 'src/personajes/entities/personaje.entity';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_skill: string;

  @Column()
  personaje_id: number;

  //   @ManyToOne(() => Personaje, (personaje) => personaje.skills)
  //   personaje: Personaje;

  @ManyToOne(() => Personaje, (personaje) => personaje.skills)
  @JoinColumn({ name: 'personaje_id' }) // Aquí le decimos a TypeORM que la columna en la BD se llama personaje_id
  personaje: Personaje;
}
