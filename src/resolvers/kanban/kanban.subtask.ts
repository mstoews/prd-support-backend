/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { SubTasks as SubTasks } from '../../models/kanban.model';
import { Prisma } from '@prisma/client';
import { SubTaskInputs } from 'src/models/inputs/kanban.inputs';


@Resolver('KanbanTaskResolver')
export class KanbanSubtaskResolver {
  constructor(
    private prisma: PrismaService) { }

  @Query((returns) => [SubTasks])
  async SubTasks() {
    return this.prisma.kb_subtask.findMany();
  }

  @Query((returns) => [SubTasks])
  async SubTasksByTaskId(
     @Args('task_id', { type: () => String }) task_id?: string,
  ) {
    return this.prisma.kb_subtask.findMany({
      where : {
        task_id: task_id,
      }
    });
  }


  @Query((returns) => [SubTasks])
  async SubTaskById(
    @Args('subid', { type: () => String }) subid?: string,
    @Args('task_id', { type: () => String }) task_id?: string,
  ) {
    return this.prisma.kb_subtask.delete({
      where: {
        task_id_subid: {
          task_id: task_id,
          subid: subid
        }
      }
    });
  }


  // Create
  @Mutation((returns) => SubTasks)
  async createSubTask(@Args('data', { type: () => SubTaskInputs }) newUserData: Prisma.kb_subtaskCreateInput) {
    return this.prisma.kb_subtask.create({
      data: newUserData,
    });
  }

  // @Mutation((returns) => SubTasks)
  // async updateKanbanSubTask(
  //   @Args('task_id', { type: () => String }) task_id: string,
  //   @Args('subid', { type: () => String }) subid: string,
  //   @Args('data', { type: () => SubTaskInputs }) newData: Prisma.kb_subtaskUpdateInput) {
  //   return await this.prisma.kb_subtask.update(
  //     {
  //       where: {
  //         task_id_subid: {
  //           task_id: task_id,
  //           subid: subid,
  //         },
  //         data: newData
  //       },
  //     });
  // }

// Delete
  @Mutation((returns) => SubTasks)
  async deleteKanbanSubTask(
    @Args('task_id', { type: () => String }) task_id?: string,
    @Args('subid', { type: () => String }) subid?: string,) {
    return await this.prisma.kb_subtask.delete(
      {
        where: {
          task_id_subid: {
            task_id: task_id,
            subid: subid,
          },
        },
      });
  }

}




