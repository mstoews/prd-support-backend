import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { Kanban } from '../kanban.model';
import { kanbantask, Prisma } from '@prisma/client';
import { KanbanInputs } from 'src/models/inputs/kanban.inputs';


  @Resolver('KanbanTaskResolver')
  export class KanbanTaskResolver {
      constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [Kanban])
  async KanbanTaks() { 
      return this.prisma.kanbantask.findMany();
  }
  
  @Query((returns) => [Kanban])
  async KanbanById(@Args('id',{ type: () => String}) id: string) {
   return this.prisma.kanbantask.findMany({ where: {
        id : id
    },              
  });
  }


 // Create
  @Mutation((returns) => Kanban)
  async createPartyNarrative(@Args('data', { type: () => Prisma.KanbantaskScalarFieldEnum }) newUserData: Prisma.kanbantaskCreateInput) {
    return this.prisma.kanbantask.create({
      data: newUserData,
    });
  }
 
 
  // Update
  @Mutation((returns) => Kanban)
  async updatePartyNarrative(
    @Args('id', { type: () => String }) id?: string,    
    @Args('newData', { type: () => KanbanInputs }) newData?: kanbantask)
    {
    return this.prisma.kanbantask.update({
        where: {
          id : id
        },
        data: newData
      });
  }

  // Delete
  @Mutation((returns) => Kanban)
  async deleteNarrative(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('narr_type', { type: () => String }) narr_type?: string,) {
    return this.prisma.party_narrative.delete(
      {
        where: {
          party_ref_narr_type: {
            party_ref: party_ref,
            narr_type: narr_type,
          },
        },
      });
  }
  
}




