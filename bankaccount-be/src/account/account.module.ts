import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account} from '../account/entities/account.entity'
import { TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Account,User]),UserModule],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [TypeOrmModule]
  
})
export class AccountModule {}
