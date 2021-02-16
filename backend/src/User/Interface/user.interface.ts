import { Document } from 'mongoose';

export interface User extends Document {
    
        firstName : string;
        email : string;
        id : string;
        createdAt : any;
        types : boolean;
        rewards:number
    
}