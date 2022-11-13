import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction } from './entities/transaction.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AccountModule } from 'src/account/account.module';
@Module({
  imports: [TypeOrmModule.forFeature([Transaction]),AccountModule],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TypeOrmModule]
})
export class TransactionModule {}
