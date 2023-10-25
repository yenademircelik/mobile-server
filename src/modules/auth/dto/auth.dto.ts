import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  readonly phone: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
