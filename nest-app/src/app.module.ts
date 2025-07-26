import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { PersonajesModule } from './personajes/personajes.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [PaymentModule, PersonajesModule,
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',      
      port: 3306,
      username: 'root',
      password: 'khbjosemanuel22*',
      database: 'tutorial1',
      autoLoadEntities: true,
      synchronize: false, 
    }),
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
