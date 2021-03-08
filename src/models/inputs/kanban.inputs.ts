import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { StringValueNode } from 'graphql';

@InputType()
export class KanbanInputs {
   @Field({ nullable: false }) id: string;          
   @Field({ nullable: true }) title: string;
   @Field({ nullable: true }) status: string;
   @Field({ nullable: true }) summary: string;
   @Field({ nullable: true }) type: string;
   @Field({ nullable: true }) priority : string;
   @Field({ nullable: true }) tags: string;
   @Field({ nullable: true }) estimate: string; 
   @Field({ nullable: true }) assignee :string;
   @Field({ nullable: true }) rankid: string;
   @Field({ nullable: true }) color: string;
   @Field({ nullable: true }) classname : string;
}

@InputType()
export class kb_statusInputs
{
	@Field({ nullable: false })status : string;
	@Field({ nullable: false })updatedte : Date;
	@Field({ nullable: false })updateusr : string;
}

@InputType()
export class kb_priorityInputs
{
	@Field({ nullable: false })priority : string;
	@Field({ nullable: false })updatedte : Date;
	@Field({ nullable: false })updateusr : string;
}


@InputType()
export class kb_typeInputs
{
	@Field({ nullable: false })type : string;
	@Field({ nullable: false })updatedte : Date;
	@Field({ nullable: false })updateusr : string;
}

