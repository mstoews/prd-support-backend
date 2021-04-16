import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpPostService {
    constructor(private httpService: HttpService){}
    
    updateGlossByPartyRef(partyRef: string) {
        console.log('updateGlossByPartyRef', partyRef);
        const urlEndPoint = 'http://gloss-api-python:5000/genr_party_msg/myPartyRef='+partyRef+';myPostMsg=False;myRtnMsg=True;';
        return this.httpService.get(urlEndPoint);
    }
}
