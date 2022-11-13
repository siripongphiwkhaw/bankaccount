import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guards';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post()
  create( @Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
