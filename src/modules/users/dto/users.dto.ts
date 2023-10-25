import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly company: string;
  @IsNotEmpty()
  @IsString()
  readonly role: string;
  @IsNotEmpty()
  @IsString()
  readonly related_company: string;
  @IsNotEmpty()
  @IsString()
  readonly phone: string;
}
