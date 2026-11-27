import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { UsersService } from '../users/users.service.js';
import { RegistrationDto } from './dto/registration.dto.js';
import { PasswordService } from './password.service.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
  ) {}

  async login(dto: LoginDto) {
    const isUserExist = await this.usersService.findbyEmail(dto.email);

    if (!isUserExist)
      throw new UnauthorizedException('Invalid Email or Password ');
  }

  async registration(dto: RegistrationDto) {
    if (dto.password != dto.confirmPassword)
      throw new BadRequestException('Password must equal confirm passwrod');

    const isUserExist = await this.usersService.findbyEmail(dto.email);
    if (isUserExist) throw new UnauthorizedException('Invalid credentionls');

    const passwordHash = await this.passwordService.hash(dto.password);

    await this.usersService.create({
      name: dto.name,
      email: dto.email,
      passwordHash,
    });

    
  }
}
