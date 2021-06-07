import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: false })
  role: Role;

  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: false })
  createdAt: string

  @Field({ nullable: false })
  updatedAt: string

  @Field({ nullable: false })
  userid: string
}
