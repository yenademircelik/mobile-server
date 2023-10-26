import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { worksProvider } from './works.provider';

@Module({
  providers: [WorksService, ...worksProvider],
  controllers: [WorksController],
})
export class WorksModule {}
