import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { QUALITYCONTROL_REPOSITORY } from '../core/constants';
import { QaulityControl } from './quality-control.entity';

@Injectable()
export class QualityControlService {
  constructor(
    @Inject(QUALITYCONTROL_REPOSITORY)
    private readonly qualityControlRepository: typeof QaulityControl,
  ) {}

  async findQualityControlByFormIdWorkId(formId: number, workId: number) {
    const qualityControls = await this.qualityControlRepository.findAll({
      where: { form_id: formId, work_id: workId },
    });

    if (qualityControls.length === 0) {
      throw new NotFoundException('QualityControl is not be found !');
    }

    return qualityControls;
  }
}
