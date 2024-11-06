// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'; // Para la autenticación con JWT
import { UsersModule } from '../users/users.module'; // Importa UsersModule
import { JwtService } from '@nestjs/jwt'; // Asegúrate de importar el servicio de JWT

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '60m' },
    }), // Configura JWT
    UsersModule, // Importa UsersModule para poder acceder a UsersService
  ],
  providers: [AuthService, JwtService], // Agrega AuthService y JwtService como proveedores
  controllers: [AuthController],
})
export class AuthModule {}
