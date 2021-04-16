import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs/internal/Observable';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { JsonObject } from '.prisma/client';


@Injectable()
export class HttpPostGlossDBService {
    constructor(private httpService: HttpService,
        configService: ConfigService)
        {
        this.glossdb_host = configService.get('GLOSSDB_HOST');
        this.glossdb_msg = configService.get('GLOSSDB_POST_MSG');
        this.glossdb_return_msg = configService.get('GLOSSDB_RETURN_MSG');
    }
    private readonly logger = new Logger('HttpPostGlossDBService');

    glossdb_host: string;
    glossdb_msg: string;
    glossdb_return_msg: string;

    swift_host: string;
    swift_msg: string;
    swift_return_msg: string;
    

    updateGlossSwiftRouter(party_ref: string, party_swift_router: JsonObject ){
        
        if (this.swift_host === undefined)
        {
            this.swift_host = ':5000';
            this.logger.log('glossdb_host:',this.glossdb_host);
        }

        if (this.swift_msg === undefined)
        {
            this.glossdb_msg = 'False';
        }

        if (this.glossdb_return_msg === undefined)
        {
            this.glossdb_return_msg = 'True';
        }

        const urlEndPoint = this.glossdb_host+
        '/genr_party_msg/myPartyRef='+party_ref+
        ';myPostMsg='+this.glossdb_msg+
        ';myRtnMsg='+this.glossdb_return_msg+';';
        
        this.logger.log(': HTTPPostService',urlEndPoint)
        return this.httpService.get(urlEndPoint).toPromise();

    }    
}
