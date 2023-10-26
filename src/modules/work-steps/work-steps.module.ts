import { Module } from '@nestjs/common';
import { WorkStepsService } from './work-steps.service';
import { WorkStepsController } from './work-steps.controller';
import { workStepsProvider } from './work-steps.provider';

@Module({
  providers: [WorkStepsService, ...workStepsProvider],
  controllers: [WorkStepsController],
})
export class WorkStepsModule {}
