import { Inject, Injectable } from '@nestjs/common';
import { PRODUCTS_REPOSITORY } from '../core/constants';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPOSITORY)
    private readonly productRepository: typeof Products,
  ) {}

  async getProductInfoById(productId: number) {
    const product = await this.productRepository.findByPk<Products>(productId);
    return product;
  }
}
