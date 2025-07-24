import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { PersonajesModule } from './personajes/personajes.module';

@Module({
  imports: [PaymentModule, PersonajesModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // o 'mariadb'
      host: 'localhost',       // o la IP del servidor
      port: 3306,
      username: 'root',
      password: 'khbjosemanuel22*',
      database: 'tutorial1',
      autoLoadEntities: true,
      synchronize: false, // solo en desarrollo
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
