import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(returns => String)
  helloWorld(): string {
    return '<h1>Hello from GLOSS API Server\nOpen graphql playground by entering the end point graphql</h1>';
  }
}
