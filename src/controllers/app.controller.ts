import { Controller, Get, Param, Post, HttpService } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { HttpPostService} from '../services/http-post/http-post.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private  httpService :HttpService, private httpPostService: HttpPostService  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  public async postGlossXML(@Param('party_type') party_type: string){
     // this.httpPostService.updateGlossByPartyRef(party_type);
  }

}
