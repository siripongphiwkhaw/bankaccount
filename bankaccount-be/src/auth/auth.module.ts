import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local/local.strategy';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    ConfigModule,
    UserModule, 
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '3 days' },
        }
      }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy,UserService],
  controllers: [AuthController],
})
export class AuthModule {}
