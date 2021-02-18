import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckoutSchema } from './Schema.ts/checkout.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Checkout', schema: CheckoutSchema }])
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService]
})
export class CheckoutModule { }