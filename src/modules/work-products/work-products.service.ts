import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { WORKPRODUCTS_REPOSITORY } from '../core/constants';
import { WorkProducts } from './work-products.entity';

@Injectable()
export class WorkProductsService {
  constructor(
    @Inject(WORKPRODUCTS_REPOSITORY)
    private readonly workProductRepository: typeof WorkProducts,
  ) {}

  async getByWorkIds(ids: number[]) {
    const works = await this.workProductRepository.findAll({
      attributes: ['work_id', 'product_id', 'status'],
      where: {
        work_id: ids,
      },
    });
    if (works.length === 0) {
      throw new NotFoundException('Work products can not be found !');
    }
  }

  async updateStatus(work_id: number, product_id: number, status: string) {
    await this.workProductRepository.update(
      { status },
      {
        where: {
          work_id,
          product_id,
        },
      },
    );
    const updatedWorkProduct = await this.workProductRepository.findAll({
      where: { work_id: work_id, product_id: product_id },
    });

    if (updatedWorkProduct.length === 0) {
      throw new NotFoundException('WorkProduct can not be found !');
    }
    return updatedWorkProduct;
  }
}
