import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { VendorService } from './vendor.service';

@UseGuards(JwtGuard)
@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get(':vendorId')
  async getVendorById(@Param('vendorId') vendorId: number) {
    const vendor = await this.vendorService.getVendorById(vendorId);
    if (!vendor) {
      throw new NotFoundException('Vendor is not found !');
    }
    return vendor;
  }
}
