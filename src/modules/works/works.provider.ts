import { WORK_REPOSITORY } from '../core/constants';
import { Work } from './works.entity';

export const worksProvider = [
  {
    provide: WORK_REPOSITORY,
    useValue: Work,
  },
];
