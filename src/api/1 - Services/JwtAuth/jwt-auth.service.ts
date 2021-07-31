import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  validateUser() {
    return {};
  }

  authenticate(credential: string) {
    if (credential !== 'admin') {
      throw new UnauthorizedException('Invalid Credentials');
    }

    return {
      access_token: this.jwtService.sign({ credential: credential }),
    };
  }
}
