import { Controller, Get, Param } from '@nestjs/common';
import { HttpPostService} from '../services/http-post/http-post.service'

@Controller('gloss')
export class GlossController {
    constructor(private httpPostService: HttpPostService) {}
    @Get(':partyType')
    getAllById(@Param() param): string {
        this.httpPostService.updateGlossByPartyRef(param.partyType);
        return param.partyType;
    }

}
