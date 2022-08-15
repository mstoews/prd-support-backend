import { Controller, Get, Param, Post, HttpService } from '@nestjs/common';
import { AppService } from '../services/app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private  httpService :HttpService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  getHelloName(name: string): any {
    throw new Error('Method not implemented.');
  }

  @Post()
  public async postGlossXML(@Param('party_type') party_type: string){
     // this.httpPostService.updateGlossByPartyRef(party_type);
  }

}
