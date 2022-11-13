import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, BeforeInsert, JoinTable, ManyToOne, OneToMany} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { join } from 'path';
@Entity('account')
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn({name:'accountId'})
  accountID: number;
  

  @Column({name:'balance'})
  balance: number; 

  @Column({name:'userId'})
  userId: number; 
}
