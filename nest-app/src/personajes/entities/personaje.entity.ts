import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Skill } from 'src/skills/entities/skill.entity';

@Entity('personajes')
export class Personaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  estatura: number;

  @OneToMany(() => Skill, (skill) => skill.personaje)
  skills: Skill[];

  /////
}
