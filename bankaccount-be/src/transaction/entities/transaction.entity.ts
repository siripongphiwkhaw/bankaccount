import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn({name:'transactionId'})
  transactionID: number;

  @Column({name:'description'})
  Description: string; 

  @Column({name:'accountId'})
  accountID: number;
}
