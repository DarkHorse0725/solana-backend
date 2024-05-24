import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SigninDto, SignupDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
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
}
