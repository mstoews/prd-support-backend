import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return '<body style="background-color:  #005694; margin: 50px">\
    <h1 style="color:White;">GLOSS CONFIG API</h1>\
    <hd>\
    <h2 style="color:White;">Add graphql to the url to enter the playground</h2>\
    <p style="color:White;">The server should bring up the graphql playground in development mode. When set to production, the playground is no longer visible.</p>\
    <p style="color:White;">http://servername:port/graphql</p>\
    </body>';
  }
}
