import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ParseStringPipe } from 'src/common/parse-string.pipe';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit = 100,
    @Query('offset', new DefaultValuePipe(10), ParseIntPipe) offset = 10,
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
  create(@Body() createProductDTO: CreateProductDto) {
    return {
      message: 'crear producto',
      createProductDTO,
    };
  }

  @Put(':id')
  delete(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return {
      id,
      updateProductDto,
    };
  }
}
