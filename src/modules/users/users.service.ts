import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { USER_REPOSITORY } from '../core/constants';
import { User } from './users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async getUserById(id: number) {
    const user = await this.userRepository.findByPk<User>(id);

    if (!user) {
      throw new NotFoundException('User can not be found !');
    }

    return user;
  }

  async getUserByPhone(phone: string) {
    const user = await this.userRepository.findOne({ where: { phone } });

    if (!user) {
      throw new NotFoundException(
        `User can not be found with this number ${phone}`,
      );
    }

    return user;
  }

  async getUserInfo(token: string) {
    try {
      const decodedToken = this.jwtService.verify(token);
      const userId = decodedToken.userId;

      const user = await this.getUserById(userId);

      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
