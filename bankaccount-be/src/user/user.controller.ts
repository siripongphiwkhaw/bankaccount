import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { signUpDto } from './dto/signUp.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guards';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
    signUp(
        @Body() signUpDto: signUpDto
    ): Promise<User> {
        return this.userService.signUp(signUpDto)
    }
    
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOneById(@Param('id') id: number): Promise<User> {
      return this.userService.findOne(id);
    }

  
}
