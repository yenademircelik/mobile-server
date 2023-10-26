import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { ProductsService } from './products.service';

@UseGuards(JwtGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get(':productId')
  async getProductById(@Param('productId') productId: number) {
    const product = await this.productService.getProductInfoById(productId);

    if (!product) {
      throw new NotFoundException('Product is not be found !');
    }

    return product;
  }
}
