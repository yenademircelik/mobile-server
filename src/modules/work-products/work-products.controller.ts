import {
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Put,
  UseGuards,
  Body,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { WorkProductsService } from './work-products.service';

@UseGuards(JwtGuard)
@Controller('work-products')
export class WorkProductsController {
  constructor(private readonly workProductsService: WorkProductsService) {}

  @Get(':ids')
  async getByWorkIds(@Param('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.workProductsService.getByWorkIds(ids);
    return result;
  }

  @Put(':workId/products/:productId')
  async updateStatus(
    @Param('workId') workId: number,
    @Param('productId') productId: number,
    @Body('status') status: string,
  ) {
    const workProducts = await this.workProductsService.updateStatus(
      workId,
      productId,
      status,
    );

    return workProducts;
  }
}
