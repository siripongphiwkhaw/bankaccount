import { IsNotEmpty ,Matches, Min, MinLength} from 'class-validator';

export class signUpDto {

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}
