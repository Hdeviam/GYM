// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Asegúrate de importar la entidad User

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Registra el repositorio de User
  ],
  providers: [UsersService], // Asegúrate de que UsersService esté en providers
  exports: [UsersService], // EXPORTA el UsersService para que otros módulos puedan usarlo
  controllers: [UsersController],
})
export class UsersModule {}
