import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
      return '<h1>GLOSS API Server</h1><h2>Open graphql playground by entering the end point graphql</h2>';
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }

  getUpdateName(party: string): string {
    return `<h1> ${party}! </h1>`;
  }
}
