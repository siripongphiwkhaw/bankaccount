import { ConflictException,Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt'
import {signUpDto} from './dto/signUp.dto'



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  
  async signUp(signupUpDto: signUpDto): Promise<User> {
    try {
        const {
            email,
            name,
            password,
        } = signupUpDto

        const hashedPassword = await bcrypt.hashSync(password, 10)

        const user = this.userRepository.create({
            email,
            name,
            password: hashedPassword,
        })

        return await this.userRepository.save(user)
    } catch(e) {
        throw new ConflictException({
            message: ['Email has been already using.']
        })
    }
    
}

async findOneUser(email: string): Promise<any | undefined> {
  const user = await this.userRepository.findOneBy({ email })
  return user
}


    async findOne(userId : number) : Promise<any> {
    const user = await this.userRepository.findOneBy({userId });
    const { password, ...result } = user
            return result
  }
}


