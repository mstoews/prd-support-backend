/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { kb_task } from '../../models/kanban.model';
import { Prisma } from '@prisma/client';
import { KanbanInputs } from 'src/models/inputs/kanban.inputs';


@Resolver(of => kb_task)
export class KanbanTaskResolver {
  private readonly logger = new Logger('KanbanTaskResolver', true);
  constructor(private prisma: PrismaService) { }


  // Query

  @Query((returns) => [kb_task])
  async KanbanTask() {
    return this.prisma.kb_task.findMany();
  }

  // @ResolveField()
  // async subtasks(@Parent() task: kb_task) {
  //   const { task_id } = task;
  //   this.logger.verbose(`Retrieve subtasks for task :${task_id}`);
  //   return this.prisma.kb_subtask.findMany({ where: { task_id: task_id } });
  // }

  @ResolveField()
  async status(@Parent() task: kb_task) {
    const { status } = task;
    return this.prisma.kb_status.findMany({ where: { status: status } });
  }


  @ResolveField()
  async type(@Parent() task: kb_task) {
    const { type } = task;
    return this.prisma.kb_type.findMany({ where: { type: type } });
  }

  @ResolveField()
  async priority(@Parent() task: kb_task) {
    const { priority } = task;
    return this.prisma.kb_priority.findMany({ where: { priority: priority } });
  }

  @Query((returns) => [kb_task])
  async KanbanTaskByRefAndStatus(
    @Args('client_id', { type: () => String }) client_id: string, 
    @Args('status', { type: () => String }) status: string) {
    return this.prisma.kb_task.findMany({
      orderBy : [{
        rankid: 'asc',
      }
      ],
      where: {
        client_id: client_id,
        status: status
      },
    });
  }

  @Query((returns) => [kb_task])
  async KanbanTaskByRef(
    @Args('client_id', { type: () => String }) client_id: string) {
    return this.prisma.kb_task.findMany({
      where: {
        client_id: client_id
      },
    });
  }

  @Query((returns) => kb_task)
  async KanbanTaskByTaskId(
    @Args('task_id', { type: () => String }) taskId: string) {
    return this.prisma.kb_task.findUnique({
      where: {
        task_id: taskId
      },
    });
  }


  @Query((returns) => [kb_task])
  async KanbanTaskByStatus(@Args('status', { type: () => String }) status: string) {
    return this.prisma.kb_task.findMany({
      orderBy : [{
        rankid: 'asc',
      }
      ],
      where: {
        status,
      },
    });
  }

  @Query((returns) => kb_task)
  async KanbanFirstTask(  
    @Args('client_id', { type: () => String }) client_id: string) {
    return this.prisma.kb_task.findFirst({
      where: {
        client_id: client_id
      },
    });
  }

  @Query((returns) => [kb_task])
  async KanbanByTaskId(@Args('task_id', { type: () => String }) task_id: string) {
    return this.prisma.kb_task.findMany({
      where: {
        task_id: task_id
      },
    });
  }



  @Query((returns) => kb_task)
  async KanbanUniqueByTaskId(@Args('task_id', { type: () => String }) task_id: string) {
    return this.prisma.kb_task.findUnique({
      where: {
        task_id: task_id
      },
    });
  }




  // Create
  @Mutation((returns) => kb_task)
  async createTask(@Args('data', { type: () => KanbanInputs }) newTaskData: Prisma.kb_taskCreateInput) {
    return this.prisma.kb_task.create({
      data: newTaskData,
    });
  }

  // Update
  @Mutation((returns) => kb_task)
  async updateTask(
    @Args('task_id', { type: () => String }) task_id?: string,
    @Args('newData', { type: () => KanbanInputs }) newData?: Prisma.kb_taskUpdateInput) {
    return this.prisma.kb_task.update({
      where: {
        task_id: task_id
      },
      data: newData
    });
  }

  // Update parentId
  @Mutation((returns) => kb_task)
  async updateTaskParentId(
    @Args('task_id', { type: () => String }) task_id?: string,
    @Args('parentId', { type: () => Number }) parentId?: number)
    {
    const task = await this.KanbanUniqueByTaskId(task_id);
    task.parentId = parentId;
    return this.updateTask(task_id, task);
  }


  // Update Dependencies

  @Mutation((returns) => kb_task)
  async updateTaskDependency(
    @Args('task_id', { type: () => String }) task_id?: string,
    @Args('dependency', { type: () => String }) dependency?: string)
    {
    const task = await this.KanbanUniqueByTaskId(task_id);
    task.dependencies = dependency
    return this.updateTask(task_id, task);
  }

  // Delete
  @Mutation((returns) => kb_task)
  async deleteTask(
    @Args('task_id', { type: () => String }) task_id?: string) {
    return this.prisma.kb_task.delete({
      where: {
        task_id: task_id
      }
    });
  }



}


