import { BaseEntity, Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';
@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn({name:'transactionId'})
  transactionId: number;

  @Column({name:'Description'})
  description: string; 

  @Column({name:'accountId'})
  accountId: number;

  @Column({name:'targetaccountId'})
  targetaccountId: number;
  
  @Column({name:'amount'})
  amount: number;
  
  @CreateDateColumn()
  Created: Date;

  
  
}
