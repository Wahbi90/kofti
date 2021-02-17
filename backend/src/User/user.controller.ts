import {
  Controller,
  Patch,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async addUser(
    @Body('firstName') userfirstName: string,
    @Body('email') useremail: string,
    @Body('id') userid: String,
    @Body('types') usertypes: boolean,
    @Body('rewards') userrewards: number,
  ) {
    const generatedId = await this.userService.insertUser(
      userfirstName,
      useremail,
      userid,
      usertypes,
      userrewards,
    );
    return { id: generatedId };
  }

  @Get()
  async getUsers() {
    const users = await this.userService.getusers();
    return users;
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.userService.getuser(userId);
  }
}
