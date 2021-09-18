import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class Model {
  @Field((type) => ID)
  userid: string;
  createdAt: Date;
  updatedAt: Date;
}
