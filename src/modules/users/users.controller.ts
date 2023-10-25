import {
  Controller,
  Get,
  NotFoundException,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('info')
  async getUserInfo(@Req() req: Request) {
    const token = req.headers.authorization.split(' ')[1];
    const user = await this.userService.getUserInfo(token);

    if (!user) {
      throw new NotFoundException('User can not be found !');
    }
    return user;
  }
}
