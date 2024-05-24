import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignupDto } from './auth.dto';
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
}
