import { Controller, Get, Post ,Body} from '@nestjs/common';
import { AppService } from './app.service';
import axios, { AxiosResponse } from "axios"
@Controller()
export class AppController {

   @Get ()
   get(): any {
  

    return "hello";
  }
  @Post() 
  
    test():string {
      console.log("sent")
      return 'ayhajaa'
    }
  
}

