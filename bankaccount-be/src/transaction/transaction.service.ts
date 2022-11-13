import { Injectable,HttpStatus,HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Account } from 'src/account/entities/account.entity';
import { Transaction } from './entities/transaction.entity';
@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}
  
  async deposit(createTransactionDto: CreateTransactionDto): Promise<Account>{
  const account = await this.accountRepository.findOneBy({
       accountId:createTransactionDto.accountId
    });
    account.balance = createTransactionDto.amount + account.balance;
    this.accountRepository.save(account);
    createTransactionDto.description = "Deposit: " + createTransactionDto.amount
    this.transactionRepository.save(createTransactionDto)
  
    return account;
  }
  async withdraw(createTransactionDto: CreateTransactionDto): Promise<Account>{
    const account = await this.accountRepository.findOneBy({
         accountId:createTransactionDto.accountId
      });
      if(account.balance < createTransactionDto.amount){
        throw new HttpException('Your balance not enough', HttpStatus.BAD_REQUEST);
      }
      account.balance = account.balance - createTransactionDto.amount;
      this.accountRepository.save(account);
      createTransactionDto.description = "Withdraw: " + createTransactionDto.amount
      this.transactionRepository.save(createTransactionDto)
    
      return account;
    }

    async transfer(createTransactionDto: CreateTransactionDto): Promise<Account>{
      const account = await this.accountRepository.findOneBy({
           accountId:createTransactionDto.accountId
        });
      const targetaccount = await this.accountRepository.findOneBy({
        accountId:createTransactionDto.targetaccountId
       });
        if(account.balance < createTransactionDto.amount){
          throw new HttpException('Your balance not enough', HttpStatus.BAD_REQUEST);
        }
       targetaccount.balance = createTransactionDto.amount + targetaccount.balance
       account.balance = account.balance - createTransactionDto.amount
        
       this.accountRepository.save(account);
       this.accountRepository.save(targetaccount);
        
       createTransactionDto.description = 
       "Transfer: " + createTransactionDto.amount + " From: " + 
       createTransactionDto.accountId + " To: " + createTransactionDto.targetaccountId
        
       this.transactionRepository.save(createTransactionDto)
      
       return account;
      }

      async interest(accountId: number): Promise<any | undefined> {
        const accountIn = await this.accountRepository.findOneBy({ accountId})
        if(accountIn.balance <= 0){
           const msg = "Your balance not enough"
           return msg
          
        }
        const interest = "Your interest percent per year is 5" + "Your Interest  is: " + (accountIn.balance * 5 ) / 100
        return interest
      }
      
      async allTransaction (id : number): Promise<Transaction[]>{
         return await this.transactionRepository.find({
          where :[{accountId:id},{targetaccountId:id}]})
      }
    
}