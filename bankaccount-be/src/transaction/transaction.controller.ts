import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guards';
import { Transaction } from './entities/transaction.entity';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/deposit')
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.deposit(createTransactionDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Post('/withdraw')
  withdraw( @Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.withdraw(createTransactionDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Post('/transfer')
  transfer( @Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.transfer(createTransactionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/interest/:accountId')
  interest(@Param('accountId') accountId: number): Promise<any> {
    return this.transactionService.interest(accountId);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('/all/:id')
  allTransaction(@Param('id') id: number): Promise<Transaction[]> {
    return this.transactionService.allTransaction(id);
  }
  
}
