import { Injectable ,NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
//import { CreateProductDTO } from '/dtos/product.dto';


@Injectable()
export class ProductService {
      constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
      ) {}
    
      async insertProduct(title: string, price: number,category:String, image:String) {
        const newProduct = new this.productModel({
          title,
          price,
          category,
          image,

        });
        const result = await newProduct.save();
       
        return result.id as string;
        
      }
    
      async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map(prod => ({
          id: prod.id,
          title: prod.title,
          price: prod.price,
          category: prod.category,
          image: prod.image
        }));
      }
    
      async getSingleProduct(productId: string) {
        const product = await this.findProduct(productId);
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          category:product.category,
          image:product.image
        };
      }
    
      async updateProduct(
        productId: string,
        title: string,
        price: number,
        category:String,
        image:String,
      ) {
        const updatedProduct = await this.findProduct(productId);
        if (title) {
          updatedProduct.title = title;
        }
       
        if (price) {
          updatedProduct.price = price;
        }
        if (category) {
          updatedProduct.category = category;
        }
        if (image) {
          updatedProduct.image = image;
        }
        updatedProduct.save();
      }
    
      async deleteProduct(prodId: string) {
        const result = await this.productModel.deleteOne({_id: prodId}).exec();
        if (result.n === 0) {
          throw new NotFoundException('Could not find product.');
        }
      }
    
      private async findProduct(id: string): Promise<Product> {
        let product;
        try {
          product = await this.productModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find product.');
        }
        if (!product) {
          throw new NotFoundException('Could not find product.');
        }
        return product;
      }

// async getAllProducts(): Promise<Product[]> {
    //     const product = await this.productModel.find().exec();
    //     return product;
    // }
}