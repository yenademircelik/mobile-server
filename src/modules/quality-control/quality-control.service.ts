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

  // async updateQualityIssue(
  //   id: string,
  //   issue: boolean,
  //   issueText: string,
  //   issueDescription: string,
  // ) {
  //   try {
  //     const [affectedRows] = await this.qualityControlRepository.update(
  //       {
  //         issue: issue,
  //         issue_text: issueText,
  //         issue_description: issueDescription,
  //       },
  //       { where: { id } },
  //     );

  //     if (affectedRows > 0) {
  //       const updatedQualityControl =
  //         await this.qualityControlRepository.findByPk(id);
  //       return updatedQualityControl;
  //     } else {
  //       throw new Error('Quality control not found or not updated.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }
}
