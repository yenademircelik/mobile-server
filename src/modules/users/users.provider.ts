import { USER_REPOSITORY } from '../core/constants/index';
import { User } from './users.entity';

export const usersProvider = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
