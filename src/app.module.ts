import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { VendorModule } from './modules/vendor/vendor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    DatabaseModule,
    VendorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
