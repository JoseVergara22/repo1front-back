import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personaje } from './entities/personaje.entity';
import { PersonajesService } from './personajes.service';
import { PersonajesController } from './personajes.controller';

@Module({
   imports: [TypeOrmModule.forFeature([Personaje])],
  controllers: [PersonajesController],
  providers: [PersonajesService],
})
export class PersonajesModule {}
