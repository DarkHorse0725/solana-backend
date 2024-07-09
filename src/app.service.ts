import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private authService: AuthService,
  ){}
  onApplicationBootstrap() {
    try {
      this.authService.signUp({
        email: 'admin@paid.com',
        password: 'admin123',
        role: 'admin'
      })
    } catch (e) {
      console.log(e);
    }
  }
  getHello(): string {
    return 'Hello World!';
  }
  
}
