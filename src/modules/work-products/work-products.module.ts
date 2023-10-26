import { Module } from '@nestjs/common';
import { WorkProductsService } from './work-products.service';
import { WorkProductsController } from './work-products.controller';
import { workProductsProvider } from './work-products.provider';

@Module({
  providers: [WorkProductsService, ...workProductsProvider],
  controllers: [WorkProductsController],
})
export class WorkProductsModule {}
