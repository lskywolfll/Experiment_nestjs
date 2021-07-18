import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productID')
  getCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('productID', ParseIntPipe) productId: number,
  ): string {
    return `category #${id} product #${productId}`;
  }
}
