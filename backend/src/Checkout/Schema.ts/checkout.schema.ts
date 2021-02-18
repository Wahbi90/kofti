import * as mongoose from 'mongoose';

export const CheckoutSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: Number,
  adress: String,
  zipCode: Number,
  cartItems:Array,
});