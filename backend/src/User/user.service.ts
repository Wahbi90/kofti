import { Injectable ,NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Interface/user.interface';



@Injectable()
export class UserService {

      constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
      ) {}
    
      async insertUser(  firstName : String,email : String, id : String,types : Boolean, rewards:Number) {
        const newUser = new this.userModel({
            firstName ,
            email,
            id ,
            types ,
            rewards
        });
        const result = await newUser.save();
       
        return result.id as string;
      }
      
        async getusers() {
          const users = await this.userModel.find().exec();
          return users.map(user => ({
            firstName :user.firstName ,
            email :user.email,
            id :user.id ,
            types : user.types ,
            rewards : user.rewards
          }));
        }
      
        async getuser(userId: string) {
          const user = await this.findUser(userId);
          return {
            firstName :user.firstName ,
            email :user.email,
            id :user.id ,
            types : user.types,
            rewards : user.rewards
          };
        
        }

      private async findUser(id: string): Promise<User> {
        let user;
        try {
          user = await this.userModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find user.');
        }
        if (!user) {
          throw new NotFoundException('Could not find user.');
        } return user;
      }

      }