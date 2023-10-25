import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProvider } from './users.provider';

@Module({
  imports: [],
  providers: [UsersService, ...usersProvider],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
