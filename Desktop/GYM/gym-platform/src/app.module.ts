// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity'; //
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Cambia a 'postgres' si no lo has hecho aún
      host: 'localhost',
      port: 5432, // Asegúrate de que es el puerto correcto de PostgreSQL
      username: 'postgres',  // Cambiado de 'root' a 'postgres'
      password: '1234',  // Cambia esto con la contraseña correcta de tu usuario 'postgres'
      database: 'gym_platform',  // La base de datos que creaste
      entities: [User],
      synchronize: true, // Solo en desarrollo, ten cuidado con esta opción en producción
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
