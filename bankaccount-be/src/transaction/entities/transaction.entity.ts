import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn({name:'transaction_Id'})
  transactionID: number;

  @Column({name:'Description'})
  Description: string; 

  @Column({name:'account_Id'})
  accountID: number;
}
