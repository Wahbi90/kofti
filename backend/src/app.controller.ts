
import { Controller, Get, Post ,Body} from '@nestjs/common';
import { AppService } from './app.service';
import axios, { AxiosResponse } from "axios"

@Controller()
export class AppController {
<<<<<<< HEAD
  constructor() {}

  @Get()
  async getHello(): Promise<any> {
    var res = await axios.get('https://fakestoreapi.com/products')
    return res.data.results;
  }
=======

   @Get ()
   get(): any {
  

    return "hello";

  @Post() 
  
    test():string {
      console.log("sent")
      return 'ayhajaa'
    }
  
>>>>>>> 0769e7d69f44862f5026b5ccdcd642f1cb85a2d7
}

