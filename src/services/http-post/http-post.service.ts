import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { PartyTemplate } from 'src/models/party.model';

@Injectable()
export class HttpPostService {
    constructor(private httpService: HttpService,
        configService: ConfigService) {
        this.python_host = configService.get('PYTHON_HOST');
        this.python_msg = configService.get('PYTHON_POST_MSG');
        this.python_return_msg = configService.get('PYTHON_RETURN_MSG');
        this.java_host = configService.get('JAVA_HOST');
    }
    private readonly logger = new Logger('HttpPostService');
    python_host: string;
    python_msg: string;
    python_return_msg: string;
    java_host: string;

    swift_host: string;
    swift_msg: string;
    swift_return_msg: string;

    updateGlossXMLByPartyRef(partyRef: string): Promise<AxiosResponse> {

        if (this.python_host === undefined) {
            this.python_host = 'gloss-api-python:5000';
            this.logger.log('python_host:', this.python_host);
        }

        if (this.python_msg === undefined) {
            this.python_msg = 'False';
        }

        if (this.python_return_msg === undefined) {
            this.python_return_msg = 'True';
        }

        const urlEndPoint = this.python_host +
            '/genr_party_msg/myPartyRef=' + partyRef +
            ';myPostMsg=' + this.python_msg +
            ';myRtnMsg=' + this.python_return_msg + ';';

        this.logger.log(': HTTPPostService', urlEndPoint);
        return this.httpService.get(urlEndPoint).toPromise();
    }

    updatePartySSIByPartyRef(partyRef: string): Promise<AxiosResponse> {

        if (this.python_host === undefined) {
            this.python_host = 'gloss-api-python:5000';
            this.logger.log('python_host:', this.python_host);
        }

        if (this.python_msg === undefined) {
            this.python_msg = 'False';
        }

        if (this.python_return_msg === undefined) {
            this.python_return_msg = 'True';
        }

        const partySSIEndPoint = this.python_host +
            '/genr_party_ssi_msg/myPartyRef=' + partyRef +
            ';myPostMsg=' + this.python_msg +
            ';myRtnMsg=' + this.python_return_msg + ';';

        this.logger.log(': HTTPPostService', partySSIEndPoint);

        return this.httpService.get(partySSIEndPoint).toPromise();
    }

    updateGlossNonXMLByPartyRef(partyTemplate: PartyTemplate,db_type:string) {
        this.logger.log('Java Host', this.java_host);
        this.logger.log('Party Template Data', JSON.stringify(partyTemplate));
        const httpOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        this.httpService.post(this.java_host + '/api/companystatic'+db_type, JSON.stringify(partyTemplate), httpOptions).toPromise();
    }

    updateSwiftStatic(swiftData: any): Promise<AxiosResponse> {
        this.logger.log('Java Host', this.java_host);
        this.logger.log('Swift Data', JSON.stringify(swiftData));
        const httpOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        return this.httpService.post(this.java_host + '/api/swiftstatic', JSON.stringify(swiftData), httpOptions).toPromise();
    }

    updateClassAssocStatic(classAssocData: any): Promise<AxiosResponse> {
        this.logger.log('Java Host', this.java_host);
        this.logger.log('Class Assoc Data', JSON.stringify(classAssocData));
        const httpOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        return this.httpService.post(this.java_host + '/api/classassocstatic', JSON.stringify(classAssocData), httpOptions).toPromise();
    }

}
