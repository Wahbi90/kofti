import { Controller, Patch,Get, Res, HttpStatus, Post, Body, Param } from '@nestjs/common';
import { CheckoutService } from './checkout.service';


@Controller('Checkout')
export class CheckoutController {
    constructor(private checkoutService: CheckoutService) { }
    @Post()
    async addCheckoutuser(
      @Body('fullName') userfullName: string,
      @Body('phoneNumber') userphoneNumber: number,
      @Body('adress') useradress:String,
      @Body('zipCode') userzipCode: number,
      @Body('cartItems') usercartItems:object,
    ) {
        

      const generatedId = await this.checkoutService.insertCheckoutUser(
        userfullName,
        userphoneNumber,
        useradress,
        userzipCode,
        usercartItems
      );
      return { id: generatedId };
    }

    @Get()
    async getUsers() {
      const users = await this.checkoutService.getCheckoutUser();
      return users;
    }
  



}