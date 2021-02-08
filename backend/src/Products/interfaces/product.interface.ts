import { Document } from 'mongoose';

export interface Product extends Document {
     id: string;
     title: string;
     price: number;
     category:String,
     image:String,
}