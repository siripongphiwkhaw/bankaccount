import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('account')
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn({name:'accountId'})
  accountID: number;

  @Column({name:'balance'})
  balance: number; 

  @Column({name:'userId'})
  userID: number;
}
