/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { kb_priority as PriorityModel} from '../../models/kanban.model';
import { Prisma } from '@prisma/client';
import { TaskPriorityInputs as PriorityInputs } from 'src/models/inputs/kanban.inputs';

@Resolver('KanbanPriorityResolver')
  export class KanbanPriorityResolver {
      constructor(
    private prisma: PrismaService) {}
  
@Query((returns) => [PriorityModel])
  async KanbanPriority() { 
      return this.prisma.kb_priority.findMany();
  }
  
@Query((returns) => [PriorityModel])
  async KanbanPriorityById(@Args('priority',{ type: () => String}) priority: string) {
   return this.prisma.kb_priority.findMany({ where: {
        priority : priority
        },              
    });
  }

// Create
@Mutation((returns) => PriorityModel)
  async createKanbanPriority(@Args('kanbanData', { type: () =>  PriorityInputs }) kanbanData: Prisma.kb_priorityCreateInput) {
    return this.prisma.kb_priority.create({
      data: kanbanData,
    });
  }
  
// Update
@Mutation((returns) => PriorityModel)
  async updateKanbanPriority(
    @Args('priority', { type: () => String }) priority?: string,    
    @Args('kanbanData', { type: () => PriorityInputs }) kanbanData?: Prisma.kb_priorityUpdateInput)
    {
    return this.prisma.kb_priority.update({
        where: {
          priority : priority
        },
        data: kanbanData
      });
  }

// Delete
@Mutation((returns) => PriorityModel)
  async deleteKanbanPriority(
    @Args('priority', { type: () => String }) priority?: string,) {
    return this.prisma.kb_priority.delete(
      {
        where: {
            priority : priority
          }
      });
  }
}


