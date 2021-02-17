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

    @Get()
    async getAllProducts() {
      const products = await this.productService.getProducts(); 
      return products.reverse();;
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
  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
      await this.productService.deleteProduct(prodId);
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


  
