import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { WORKSTEPS_REPOSITORY } from '../core/constants';
import { WorkSteps } from './work-steps.entity';

@Injectable()
export class WorkStepsService {
  constructor(
    @Inject(WORKSTEPS_REPOSITORY)
    private readonly workStepsRepository: typeof WorkSteps,
  ) {}

  async findOpenQualityControlStepsByWorkIds(ids: number[]) {
    const works = await this.workStepsRepository.findAll({
      attributes: ['work_id', 'status'],
      where: {
        work_id: ids,
        step_name: 'Quality Control',
        status: 'Open',
      },
    });
    if (works.length === 0) {
      throw new NotFoundException(
        `Selected work steps with this ids ${ids} can not be found !`,
      );
    }
    return works;
  }
}
