import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { Pool } from 'src/pools/pools.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private users: typeof User,
  ) {}

  create(userData: CreateUserDto): Promise<User> {
    return this.users.create(userData);
  }

  findUserByEmail(email: string): Promise<User> {
    return this.users.findOne({where: {email}});
  }

  findUserById(id: string): Promise<User> {
    return this.users.findByPk(id);
  }

  async updateUserById(id: string, data: UpdateUserDto): Promise<User> {
    await this.users.update(data, {where: {id}});
    return this.users.findByPk(id);
  }

  findCollaboarators(): Promise<User[]> {
    return this.users.findAll({
      where: {role: 'editor'}
    })
  }
}
