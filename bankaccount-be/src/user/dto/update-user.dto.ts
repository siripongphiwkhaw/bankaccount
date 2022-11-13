import { PartialType } from '@nestjs/mapped-types';
import { signUpDto } from './signUp.dto';

export class UpdateUserDto extends PartialType(signUpDto) {}
