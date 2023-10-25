import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authDto: AuthDto) {
    const existingUser = await this.userService.getUserByPhone(authDto.phone);

    if (!existingUser) {
      throw new ForbiddenException('User can not be found !');
    }

    const matchedPasswd = await bcrypt.compare(
      authDto.password,
      existingUser.password,
    );
    if (!matchedPasswd) {
      throw new BadRequestException('Incorrect Password !');
    }

    const access_token = await this.signJwtToken(
      existingUser.id,
      existingUser.email,
      existingUser.phone,
    );

    return { existingUser, access_token };
  }

  signJwtToken(userId: number, email: string, phone: string): Promise<string> {
    const payload = { userId, email, phone };
    return this.jwtService.signAsync(payload);
  }
}
