import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { VendorModule } from './modules/vendor/vendor.module';
import { WorksModule } from './modules/works/works.module';
import { WorkStepsModule } from './modules/work-steps/work-steps.module';
import { WorkProductsModule } from './modules/work-products/work-products.module';
import { ProductsModule } from './modules/products/products.module';
import { QualityControlModule } from './modules/quality-control/quality-control.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    DatabaseModule,
    VendorModule,
    WorksModule,
    WorkStepsModule,
    WorkProductsModule,
    ProductsModule,
    QualityControlModule,
    ImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
