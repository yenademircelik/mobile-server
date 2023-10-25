import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { VENDOR_REPOSITORY } from '../core/constants';
import { Vendor } from './vendor.entity';

@Injectable()
export class VendorService {
  constructor(
    @Inject(VENDOR_REPOSITORY) private readonly vendorRepository: typeof Vendor,
  ) {}

  async getVendorById(vendorId: number) {
    const vendor = this.vendorRepository.findByPk<Vendor>(vendorId);
    return vendor;
  }
}
