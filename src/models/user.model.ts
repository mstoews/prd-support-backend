import {
  Field,
  ObjectType,
  registerEnumType,
  HideField,
} from '@nestjs/graphql';
import { Post } from './post.model';
import { Model } from './model.model';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends Model {
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  posts: Post[];
  @HideField()
  password: string;
}

/*
{
"createdAt": "2021-04-01",
"email": "joe@hotmail.com"
"firstname": "TONY"
"id": "1"
"lastname": "SMITH"
"role": "Admin"
"updatedAt: "2021-04-01"
"password": "pwd"
}
*/

