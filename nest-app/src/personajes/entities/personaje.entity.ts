import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


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
}
