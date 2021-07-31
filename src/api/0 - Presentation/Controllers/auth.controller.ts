import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthService } from '@services/JwtAuth/jwt-auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Get(':credential')
  authenticate(@Param('credential') credential: string): {
    access_token: string;
  } {
    return this.jwtAuthService.authenticate(credential);
  }
}
