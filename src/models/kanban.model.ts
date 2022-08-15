/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class kb_task {
   @Field({ nullable: false })task_id: string;
   @Field({ nullable: true }) client_id: string;
   @Field({ nullable: true }) title: string;
   @Field({ nullable: true }) status: string;
   @Field({ nullable: true }) summary: string;
   @Field({ nullable: true }) type: string;
   @Field({ nullable: true }) priority: string;
   @Field({ nullable: true }) tags: string;
   @Field({ nullable: true }) estimate: number;
   @Field({ nullable: true }) assignee: string;
   @Field({ nullable: true }) rankid: number;
   @Field({ nullable: true }) color: string;
   @Field({ nullable: true }) classname: string;
   @Field({ nullable: true }) description: string;
   @Field({ nullable: true }) due_date: Date;
   @Field({ nullable: true }) start_date: Date;
   @Field({ nullable: true }) dependencies: string;
   @Field({ nullable: true }) parentId: number;
   @Field({ nullable: true }) Id: number;
}
@ObjectType()
   export class kb_task1 {
   @Field({ nullable: false }) task_id: string;
   @Field({nullable: true}) client_id: string;
   @Field({nullable: true}) title: string;
   @Field({nullable: true}) status: string;
   @Field({nullable: true}) summary: string;
   @Field({nullable: true}) type: string;
   @Field({nullable: true}) priority: string;
   @Field({nullable: true}) tags: string;
   @Field({nullable: true}) estimate: string;
   @Field({nullable: true}) assignee: string;
   @Field({nullable: true}) rankid: string;
   @Field({nullable: true}) color: string;
   @Field({nullable: true}) classname: string;
   @Field({nullable: true}) Id: string;
   @Field({nullable: true}) dependencies: string;
   @Field({nullable: true}) description: string;
   @Field({nullable: true}) due_date: string;
   @Field({nullable: true}) parentId: string;
   @Field({nullable: true}) start_date: string;
   
   
   @Field(type => [SubTasks]) 
   subtasks: SubTasks[];
   
   @Field(type => [kb_status]) 
   Status: kb_status[];
   
   @Field(type => [kb_type]) 
   Type: kb_type[];
   
   @Field(type => [kb_priority]) 
   Priority: kb_priority[];
   
}

@ObjectType()
export class SubTasks {
   @Field({ nullable: false }) task_id: string;
   @Field({ nullable: false }) subid: string;
   @Field({ nullable: true }) desc: string;
   @Field({ nullable: true }) status: string;
   @Field({ nullable: true }) summary: string;
   @Field({ nullable: true }) type: string;
   @Field(type => Int) estimate: number;
}

@ObjectType()
export class kb_status {
   @Field({ nullable: false }) status: string;
   @Field({ nullable: false }) description: string;
   @Field({ nullable: false }) updatedte: Date;
   @Field({ nullable: false }) updateusr: string;
}

@ObjectType()
export class kb_priority {
   @Field({ nullable: false }) priority: string;
   @Field({ nullable: false }) description: string;
   @Field({ nullable: false }) updatedte: Date;
   @Field({ nullable: false }) updateusr: string;
}


@ObjectType()
export class kb_type {
   @Field({ nullable: false }) type: string;
   @Field({ nullable: false }) description: string;
   @Field({ nullable: false }) updatedte: Date;
   @Field({ nullable: false }) updateusr: string;
}

