import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';


const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
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

  async signin(email: string, password: string) {
    try {
      const user = await this.usersService.findUserByEmail(email);
      if (!user) throw new UnauthorizedException("Email is not exist");
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new UnauthorizedException("Invalid password");
      }
      const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Internal Server error'
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
