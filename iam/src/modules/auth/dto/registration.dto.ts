import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class RegistrationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @MinLength(8)
  @IsNotEmpty()
  confirmPassword: string;
}
