import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    id: String,
    title: String,
    price: Number,
    category:String,
    image:String,
    
    
})
 