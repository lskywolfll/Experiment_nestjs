import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products/:productID')
  getProduct(@Param('productID', ParseIntPipe) id: number): string {
    return `product #${id}`;
  }

  @Get('products')
  getProducts(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
    @Query('brand', ParseIntPipe) brand: string,
  ): string {
    console.log(typeof limit);
    return `product limit:${limit} offset:${offset} brand:${brand}`;
  }

  @Get('categories/:id/products/:productID')
  getCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('productID', ParseIntPipe) productId: number,
  ): string {
    return `category #${id} product #${productId}`;
  }
}
