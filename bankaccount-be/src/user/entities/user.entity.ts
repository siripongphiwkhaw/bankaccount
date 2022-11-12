import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({name:'userId'})
  userId: number;

  @Column({name:'email'})
  email: string; 

  @Column({name:'name'})
  name: string; 

  @Column({name:'password'})
  password: string;
}
