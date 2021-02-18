import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './Products/product.module';
import { UserModule } from './User/user.module';
import { CheckoutModule } from './Checkout/checkout.module'
import { from } from 'rxjs';

@Module({
  imports: [CheckoutModule ,UserModule,ProductModule, MongooseModule.forRoot(
    "mongodb+srv://freashkydatabase:freshky@cluster0.m7rwn.mongodb.net/test?retryWrites=true&w=majority"
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
