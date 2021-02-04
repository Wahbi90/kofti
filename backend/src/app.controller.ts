import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import axios from 'axios';
@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello(): Promise<any> {
    var res = await axios.get('https://fakestoreapi.com/products');
    console.log(res.data);
    return res.data;
  }
}
