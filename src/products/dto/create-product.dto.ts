import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  readonly price: number;
  @IsNumber()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
