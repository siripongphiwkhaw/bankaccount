import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { signUpDto } from './dto/signUp.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
    signUp(
        @Body() signUpDto: signUpDto
    ): Promise<User> {
        return this.userService.signUp(signUpDto)
    }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  findOneUser(@Param('email') email: string): Promise<User> {
    return this.userService.findOneUser(email);
  }
}
