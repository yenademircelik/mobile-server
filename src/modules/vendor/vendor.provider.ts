import { VENDOR_REPOSITORY } from '../core/constants/index';
import { Vendor } from './vendor.entity';

export const vendorProvider = [
  {
    provide: VENDOR_REPOSITORY,
    useValue: Vendor,
  },
];
