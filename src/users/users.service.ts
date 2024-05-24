import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private users: typeof User,
  ) {}
}
