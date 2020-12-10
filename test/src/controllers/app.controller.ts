import { Controller, Get, Param, Post, HttpService } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private  httpService :HttpService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }

  @Post()
  create(@Param('update/party') party: string): string {
     return this.appService.getUpdateName(party);
  }

}
