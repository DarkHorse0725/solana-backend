import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDto } from './users.dto';

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
}
