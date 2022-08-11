/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get,  } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    getCreatePartyUpdate(){
        return {
            
        }
    }

}


