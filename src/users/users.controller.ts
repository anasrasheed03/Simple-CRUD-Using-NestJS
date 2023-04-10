import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

//specifying whole control with specific router
@Controller('users')
export class UsersController {
  @Get()
  getUser() {
    return 'Hello from Users';
  }

  //create route with specific route
  @Get('/users')
  getUsers() {
    return { name: 'Anas', email: 'anas@yahoo.com' };
  }

  @Get('/userById/:id')
  getUserById(@Param() params: { id: number }) {
    return { name: 'test User', email: 'test@test.com', id: params.id };
  }

  //importing Request from express
  @Post()
  addUser(@Req() req: Request) {
    return req.body;
  }
}
