import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('account')
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn({name:'account_id'})
  accountID: number;

  @Column({name:'balance'})
  balance: number; 

  @Column({name:'user_id'})
  userID: number;
}
