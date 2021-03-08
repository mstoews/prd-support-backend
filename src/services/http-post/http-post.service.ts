import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs/internal/Observable';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';


@Injectable()
export class HttpPostService {
    constructor(private httpService: HttpService,
        configService: ConfigService)
        {
        this.python_host = configService.get('PYTHON_HOST');
        this.python_msg = configService.get('PYTHON_POST_MSG');
        this.python_return_msg = configService.get('PYTHON_RETURN_MSG');
    }
    private readonly logger = new Logger('HttpPostService');
    python_host: string;
    python_msg: string;
    python_return_msg: string;
    
    updateGlossByPartyRef(partyRef: string): Promise<AxiosResponse> {
        
        if (this.python_host === undefined)
        {
            this.python_host = 'gloss-api-python:5000';
            this.logger.log('python_host:',this.python_host);
        }

        if (this.python_msg === undefined)
        {
            this.python_msg = 'False';
        }

        if (this.python_return_msg === undefined)
        {
            this.python_return_msg = 'True';
        }

        const urlEndPoint = this.python_host+
        '/genr_party_msg/myPartyRef='+partyRef+
        ';myPostMsg='+this.python_msg+
        ';myRtnMsg='+this.python_return_msg+';';
        
        this.logger.log(urlEndPoint)
        return this.httpService.get(urlEndPoint).toPromise();

    }

    updateSwiftByPartyRef(partyRef: string): Promise<AxiosResponse> {
        
        if (this.python_host === undefined)
        {
            this.python_host = 'gloss-api-python:5000';
            this.logger.log('python_host:',this.python_host);
        }

        if (this.python_msg === undefined)
        {
            this.python_msg = 'False';
        }

        if (this.python_return_msg === undefined)
        {
            this.python_return_msg = 'True';
        }

        const urlEndPoint = this.python_host+
        '/genr_party_msg/myPartyRef='+partyRef+
        ';myPostMsg='+this.python_msg+
        ';myRtnMsg='+this.python_return_msg+';';
        
        this.logger.log(urlEndPoint)
        return this.httpService.get(urlEndPoint).toPromise();

    }
    // handleError(error: HttpErrorResponse) {
    //     let errorMessage = 'Unknown error!';
    //     if (error.error instanceof ErrorEvent) {
    //       // Client-side errors
    //       errorMessage = `Error: ${error.error.message}`;
    //     } else {
    //       // Server-side errors
    //       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     window.alert(errorMessage);
    //     return throwError(errorMessage);
    //   }
    
}
