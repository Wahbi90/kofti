import { Injectable ,NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Checkout } from './Interface/checkout.interface';



@Injectable()
export class CheckoutService {
      constructor(
        @InjectModel('Checkout') private readonly checkoutModel: Model<Checkout>,
      ) {}
    
      async insertCheckoutUser(fullName: string, phoneNumber: number,adress:String, zipCode:number,cartItems:object) {
        const newCheckoutUser = new this.checkoutModel({
         fullName,
         phoneNumber,
         adress,
         zipCode,
         cartItems

        });
        const result = await newCheckoutUser.save();
       
        return result.id as string;
      }

      async getCheckoutUser() {
        const users = await this.checkoutModel.find().exec();
        
        return users.map(prod => ({
          fullName: prod.fullName,
          phoneNumber: prod.phoneNumber,
          adress: prod.adress,
          zipCode: prod.zipCode,
          cartItems: prod.cartItems
        }));
      }
        
        
      }