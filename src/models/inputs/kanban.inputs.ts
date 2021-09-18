import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class KanbanInputs {
   @Field({ nullable: false }) task_id: string;          
   @Field({ nullable: true })  party_ref: string;          
   @Field({ nullable: true })  title: string;
   @Field({ nullable: true })  status: string;
   @Field({ nullable: true })  summary: string;
   @Field({ nullable: true })  type: string;
   @Field({ nullable: true })  priority : string;
   @Field({ nullable: true })  tags: string;
   @Field({ nullable: true })  estimate: number; 
   @Field({ nullable: true })  assignee :string;
   @Field({ nullable: true })  rankid: number;
   @Field({ nullable: true })  color: string;
   @Field({ nullable: true })  classname : string;
   @Field({ nullable: true })  description : string;
   @Field({ nullable: true }) due_date: Date;
   @Field({ nullable: true }) start_date: Date;
   @Field({ nullable: true }) dependencies: string;

}

@InputType()
export class SubTaskInputs {
   @Field({ nullable: false }) task_id: string;
   @Field({ nullable: false }) subid: string;
   @Field({ nullable: true }) desc: string;
   @Field({ nullable: true }) status: string;
   @Field({ nullable: true }) summary: string;
   @Field({ nullable: true }) type: string;
   @Field({ nullable: true }) estimate: number;
}

@InputType()
export class TaskStatusInputs
{
	@Field({ nullable: false })status : string;
   @Field({ nullable: false })description : string;
	@Field({ nullable: false })updatedte : Date;
	@Field({ nullable: false })updateusr : string;
}

@InputType()
export class TaskPriorityInputs
{
	@Field({ nullable: false })priority : string;
   @Field({ nullable: false })description : string;
	@Field({ nullable: false })updatedte : Date;
	@Field({ nullable: false })updateusr : string;
}


@InputType()
export class TaskTypeInputs
{
	@Field({ nullable: false })type : string;
   @Field({ nullable: false })description : string;
	@Field({ nullable: false })updatedte : Date;
	@Field({ nullable: false })updateusr : string;
}

