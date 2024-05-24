import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './auth.dto';


const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService
  ){}

  async signUp(userData: SignupDto) {
    try {
      const findUser = await this.usersService.findUserByEmail(userData.email);
      if (!!findUser) throw new UnauthorizedException("Email is exist");
      const hashedPassword = await bcrypt.hash(userData.password, saltOrRounds);
      const createdUser = await this.usersService.create({...userData, password: hashedPassword});
      return createdUser;
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Internal Server error'
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
