import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { SigninDto, SignupDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersService } from 'src/users/users.service';
import { UpdateUserDto } from 'src/users/users.dto';

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
    if (!findUser) throw new UnauthorizedException();
    return findUser;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put('password')
  async updatePassword (@Request() req: any, @Body() {oldPass, newPass}: {oldPass: string; newPass: string;}) {
    const userId = req.user.sub;
    const updatedUser = await this.authService.changePassword(userId, oldPass, newPass);
    return updatedUser;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Put('profile')
  async updateProfile(@Request() req: any, @Body() data: UpdateUserDto) {
    const userId = req.user.sub;
    const updatedUser = await this.usersService.updateUserById(userId, data);
    return updatedUser;
  }
}
