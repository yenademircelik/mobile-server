import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { WORK_REPOSITORY } from '../core/constants';
import { Work } from './works.entity';

@Injectable()
export class WorksService {
  constructor(
    @Inject(WORK_REPOSITORY) private readonly workRepository: typeof Work,
  ) {}

  async getWorkByUserId(foremanId: number) {
    const usersWorks = await this.workRepository.findAll({
      where: { foreman_id: foremanId },
    });

    if (usersWorks.length === 0) {
      throw new NotFoundException('Work can not be found !');
    }
    return usersWorks;
  }

  async getWorkById(workId: number) {
    const work = await this.workRepository.findByPk<Work>(workId);
    return work;
  }
}
