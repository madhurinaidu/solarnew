import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    try {
      const tokens = await this.authService.authenticate(username, password);
      return { message: 'Login successful', tokens };
    } catch (error) {
      return { message: 'Login failed', error: error };
    }
  }
}
