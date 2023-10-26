import { Inject, Injectable } from '@nestjs/common';
import { WORKPRODUCTS_REPOSITORY } from '../core/constants';
import { WorkProducts } from './work-products.entity';

@Injectable()
export class WorkProductsService {
  constructor(
    @Inject(WORKPRODUCTS_REPOSITORY)
    private readonly workProductRepository: typeof WorkProducts,
  ) {}

  async getByWorkIds(ids: number[]) {
    return this.workProductRepository.findAll({
      attributes: ['work_id', 'product_id', 'status'],
      where: {
        work_id: ids,
      },
    });
  }

  async updateStatus(work_id: number, product_id: number, status: string) {
    const workProduct = await this.workProductRepository.update(
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
    return updatedWorkProduct;
  }
}
