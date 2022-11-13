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

  async findOne(accountId : number) : Promise<any> {
    const account = await this.accountRepository.findOneBy({accountId});
    return account 
  }

  
}
