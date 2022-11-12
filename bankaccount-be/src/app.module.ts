import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Account} from './account/entities/account.entity'
import { AccountModule } from './account/account.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Transaction } from './transaction/entities/transaction.entity';
import { TransactionModule } from './transaction/transaction.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'nut0971138686',
    database: 'bankaccounts',
    entities: [User,Account,Transaction],
    synchronize: false,
    autoLoadEntities: true
  }),
  TransactionModule,
  UserModule,
  AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
