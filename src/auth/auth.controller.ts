import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { SigninDto, SignupDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}


  @HttpCode(HttpStatus.OK)
  @Post('signup')
  async signup(@Body() body: SignupDto) {
    const signupUser = await this.authService.signUp(body);
    return signupUser;
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() body: SigninDto) {
    const { email, password } = body;
    const res = await this.authService.signin(email, password);
    return res;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  async getProfile(@Request() req: any) {
    const findUser = await this.usersService.findUserById(req.user.sub);
    return findUser;
  }
}
