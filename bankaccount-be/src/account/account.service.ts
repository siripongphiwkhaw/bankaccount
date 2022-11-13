import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { Account } from './entities/account.entity';
@Injectable()
export class AccountService {
  constructor(
   @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(User)
    private userRepository: Repository<User>
    ) {}
   async create( createAccountDto:CreateAccountDto): Promise<Account> {
   
    
  return this.accountRepository.save(createAccountDto)
     
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
