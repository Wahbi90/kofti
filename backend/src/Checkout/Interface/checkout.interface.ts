
import { Document } from 'mongoose';

export interface Checkout extends Document {
    
  fullName: string,
  phoneNumber: number,
  adress: string,
  zipCode: number,
  cartItems:object,
}


 