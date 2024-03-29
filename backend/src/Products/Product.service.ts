import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './Interface/product.interface';
//import { CreateProductDTO } from '/dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(
    title: string,
    price: number,
    category: String,
    image: String,
  ) {
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

    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      category: prod.category,
      image: prod.image,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
    };
  }

  async updateProduct(
    productId: string,
    title: string,
    price: number,
    category: String,
    image: String,
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

  async deleteProduct(prodtitle: string) {
    const result = await this.productModel
      .deleteOne({ title: prodtitle })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  async findProduct(title: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.find({ title: title }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
  async findProducts(title: string): Promise<Product> {
    let product;
    try {
      if (title == null || title.length == 0) {
        product = await this.productModel.find().exec();
      } else {
        product = await this.productModel.find({ category: title }).exec();
      }
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
