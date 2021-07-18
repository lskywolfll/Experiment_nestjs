import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ParseStringPipe } from 'src/common/parse-string.pipe';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getFilter(): string {
    return `yo soy un filter`;
  }

  @Get(':productID')
  getProduct(@Param('productID', ParseIntPipe) id: number): string {
    return `product #${id}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 10,
    @Query('brand', ParseStringPipe) brand: string,
  ) {
    return {
      message: 'hola',
      limit,
      offset,
      brand,
    };
  }

  @Post()
  create(@Body() payload) {
    return {
      message: 'crear producto',
      payload,
    };
  }
}
