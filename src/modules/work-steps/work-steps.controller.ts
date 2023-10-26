import {
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { WorkStepsService } from './work-steps.service';

@UseGuards(JwtGuard)
@Controller('work-steps')
export class WorkStepsController {
  constructor(private readonly workStepsService: WorkStepsService) {}

  @Get(':ids')
  async getOpenQualityControlStepsByWorkIds(
    @Param('ids', ParseArrayPipe) ids: number[],
  ) {
    const result =
      await this.workStepsService.findOpenQualityControlStepsByWorkIds(ids);
    return result;
  }
}
