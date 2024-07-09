import { HttpException, HttpStatus, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
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
  ) { }

  async signUp(userData: SignupDto) {
    const findUser = await this.usersService.findUserByEmail(userData.email);
    if (!!findUser) {
      throw new UnauthorizedException("Email is exist");
    }
    const hashedPassword = await bcrypt.hash(userData.password, saltOrRounds);
    const createdUser = await this.usersService.create({ ...userData, password: hashedPassword });
    return createdUser;
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
        access_token: await this.jwtService.signAsync(payload),
        user
      };
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Internal Server error'
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async changePassword(userId: string, oldPass: string, newPass: string) {
    try {
      const user = await this.usersService.findUserById(userId);
      if (!user) throw new UnauthorizedException();
      const isMatch = await bcrypt.compare(oldPass, user.password);
      if (!isMatch) {
        throw new UnauthorizedException("Current password is wrong");
      }
      const hashedPassword = await bcrypt.hash(newPass, saltOrRounds);
      const updatedUser = await this.usersService.updateUserById(user.id, {password: hashedPassword});
      return updatedUser;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
