import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(returns => String)
  helloWorld(): string {
    return '<h1>Hello from GLOSS API</h1>';
  }
  @Query(returns => String)
  hello(@Args('name') name: string): string {
    return `Hello ${name}!`;
  }
}
