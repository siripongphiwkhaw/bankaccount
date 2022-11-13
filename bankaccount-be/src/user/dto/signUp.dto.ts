import { IsNotEmpty ,Matches} from 'class-validator';

export class signUpDto {

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
  {
    message: 'Password must be minimum eight characters, at least one letter and one number.'
})
  readonly password: string;
}
