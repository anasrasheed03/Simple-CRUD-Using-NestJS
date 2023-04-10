import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

//specifying whole control with specific route
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
