import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { QualityControlService } from './quality-control.service';

@UseGuards(JwtGuard)
@Controller('quality-control')
export class QualityControlController {
  constructor(private readonly qualityControlService: QualityControlService) {}

  @Get(':formId/:workId')
  async getQualityControlByFormIdWorkId(
    @Param('formId') formId: number,
    @Param('workId') workId: number,
  ) {
    const qualityControls =
      await this.qualityControlService.findQualityControlByFormIdWorkId(
        formId,
        workId,
      );
    if (!qualityControls) {
      throw new NotFoundException('QualityControl is not be found !');
    }

    return qualityControls;
  }
}
