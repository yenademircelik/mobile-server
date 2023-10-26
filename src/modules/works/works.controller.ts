import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { WorksService } from './works.service';

@UseGuards(JwtGuard)
@Controller('works')
export class WorksController {
  constructor(private readonly workService: WorksService) {}

  @Get('/byUser/:foremanId')
  async getWorkByUserId(@Param('foremanId') foremanId: number) {
    const work = await this.workService.getWorkByUserId(foremanId);

    if (!work) {
      throw new NotFoundException('Work is not be found !');
    }

    return work;
  }

  @Get(':workId')
  async getWorkById(@Param('workId') workId: number) {
    const work = await this.workService.getWorkById(workId);

    if (!work) {
      throw new NotFoundException('Work is not be found !');
    }

    return work;
  }
}
