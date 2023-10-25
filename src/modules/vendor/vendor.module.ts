import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { vendorProvider } from './vendor.provider';

@Module({
  providers: [VendorService, ...vendorProvider],
  controllers: [VendorController],
})
export class VendorModule {}
