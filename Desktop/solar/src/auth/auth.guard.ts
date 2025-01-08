import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1]; // Extract the token from 'Bearer <token>'
    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    try {
      await this.authService.validateToken(token); // Validate the token
      return true; // Token is valid
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token'); // Token validation failed
    }
  }
}
