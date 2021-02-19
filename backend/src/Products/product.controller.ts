import {
  Controller,
  Patch,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductService } from './Product.service';
import { CreateProductDTO } from './dtos/product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('categories')
  async getAllCat() {
    const products = await this.productService.getProducts();
    const categories = [];
    products.map((el) => {
      if (!categories.includes(el.category)) {
        categories.push(el.category);
      }
    });
    return categories;
  }

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
    @Body('category') prodCategory: String,
    @Body('image') prodImage: String,
  ) {
    const generatedId = await this.productService.insertProduct(
      prodTitle,
      prodPrice,
      prodCategory,
      prodImage,
    );
    return { id: generatedId };
  }

  @Post()
  async getAllProducts(@Body('page') page: number) {
    const products = await this.productService.getProducts();
    const currentProducts = products.filter((el, i) => {
      return (page - 1) * 35 <= i && page * 35 - 1;
    });
    return currentProducts;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
    @Body('category') prodCategory: String,
    @Body('image') prodImage: String,
  ) {
    await this.productService.updateProduct(
      prodId,
      prodTitle,
      prodPrice,
      prodCategory,
      prodImage,
    );
    return null;
  }
  @Delete(':title')
  async removeProduct(@Param('title') prodtitle: string) {
    await this.productService.deleteProduct(prodtitle);
    return null;
  }
}
// @Post('/create')
// async addProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
//  const product = await this.productService.addProduct(createProductDTO);
//     return res.status(HttpStatus.OK).json({
//      message: "Product has been created successfully",
//         product
//     })
//  }

// @Get('product')
// async getAllProduct(@Res() res) {
//     const products = await this.productService.getAllProducts();
//     return res.status(HttpStatus.OK).json(products);
// }
