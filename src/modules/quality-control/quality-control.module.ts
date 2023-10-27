import { Module } from '@nestjs/common';
import { QualityControlService } from './quality-control.service';
import { QualityControlController } from './quality-control.controller';
import { qualityControlProviders } from './quality-control.provider';

@Module({
  providers: [QualityControlService, ...qualityControlProviders],
  controllers: [QualityControlController],
})
export class QualityControlModule {}
