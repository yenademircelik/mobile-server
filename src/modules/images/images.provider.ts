import { IMAGES_REPOSITORY } from '../core/constants';
import { Images } from './images.entity';

export const imagesProviders = [
  {
    provide: IMAGES_REPOSITORY,
    useValue: Images,
  },
];
