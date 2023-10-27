import { QUALITYCONTROL_REPOSITORY } from '../core/constants';
import { QaulityControl } from './quality-control.entity';

export const qualityControlProviders = [
  {
    provide: QUALITYCONTROL_REPOSITORY,
    useValue: QaulityControl,
  },
];
