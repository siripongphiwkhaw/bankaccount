import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository, getRepository, DeleteResult } from 'typeorm';



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  
  async create(createUserDto: CreateUserDto) {
  return this.userRepository.save(createUserDto)
    }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(userId : number) : Promise<User> {
    return  this.userRepository.findOneBy({userId});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}


