import { Field, InputType } from '@nestjs/graphql';
import { role } from '@prisma/client';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  hashed_password: string;

  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  client_ref?: string;

  @Field({ nullable: false })
  role: role;

  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: false })
  passport_changed_at: Date

  @Field({ nullable: false })
  createdAt: Date

  @Field({ nullable: false })
  updatedAt: Date

  @Field({ nullable: false })
  userid: string
}
