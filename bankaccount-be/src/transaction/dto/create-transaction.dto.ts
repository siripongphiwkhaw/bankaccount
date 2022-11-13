import { IsNotEmpty } from 'class-validator';
export class CreateTransactionDto {
    
    @IsNotEmpty()
    readonly accountId: number;
  
    
    readonly targetaccountId: number;

    @IsNotEmpty()
    readonly amount: number;

    
    description: string;
}
