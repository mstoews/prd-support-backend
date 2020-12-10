import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello From GLOSS API<h1>';
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }

  getUpdateName(party: string): string {
    return `<h1> ${party}! </h1>`;
  }
}
