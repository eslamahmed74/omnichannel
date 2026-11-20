import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(dto: LoginDto) {
    const isUserExist = await this.usersService.findbyEmail(dto.email);

    if (!isUserExist)
      throw new UnauthorizedException('Invalid Email or Password ');
  }

  comparePassword(){
    
  }
}
