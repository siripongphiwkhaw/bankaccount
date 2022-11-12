import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({name:'User_Id'})
  UserId: number;

  @Column({name:'Email'})
  email: string; 

  @Column({name:'Name'})
  name: string; 

  @Column({name:'Password'})
  Password: string;
}
