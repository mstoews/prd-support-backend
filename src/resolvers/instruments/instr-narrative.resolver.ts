

import { PrismaService } from './../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { InstrNarrative } from '../../models/instr.model';
import { InstrNarrativeInput } from '../../models/inputs/instr.input';


import { instr_narrative as InstrNarrativeModel, Prisma } from '@prisma/client';


  @Resolver('InstrNarrative')
  export class InstrNarrativeResolver {
      constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [InstrNarrative])
  async instrNarrative() { 
      return this.prisma.instr_narrative.findMany();
  }
  
  @Query((returns) => [InstrNarrative])
  async instrNarrativeByRef(@Args('instr_ref',{ type: () => String}) ref: string) {
   return this.prisma.instr_narrative.findMany({ where: {
     instr_ref : ref,
    },              
  });
  }
 
  @Query((returns) => [InstrNarrative])
   async instrNarrativeByRefAndType(
    @Args('instr_ref',{ nullable: false}) instr_ref?: string, 
    @Args('narrative_type',{ nullable: false}) narr_type?: string,) 
    {
      return this.prisma.instr_narrative.findMany({ where: {
       instr_ref : instr_ref, 
       narr_type : narr_type,
      },              
    });
  }

      // Create
      @Mutation((returns) => InstrNarrative)
      async createInstrNarrative(@Args('data', { type: () => InstrNarrativeInput }) newClassData: Prisma.instr_narrativeCreateInput) {
        return this.prisma.instr_narrative.create({
          data: newClassData,
        });
      }
    
      // Update
      @Mutation((returns) => InstrNarrative)
      async updateInstrNarrative(
        @Args('instr_ref', { type: () => String }) instr_ref?: string,
        @Args('narr_type', { type: () => String }) narr_type?: string,
        @Args('data', { type: () => InstrNarrativeInput }) newData?: InstrNarrativeModel,) {
        return this.prisma.instr_narrative.update(
          {
            where: {
              instr_ref_narr_type: {
                instr_ref: instr_ref,
                narr_type: narr_type,
              },
            },
            data: newData,
    
          });
      }
    
      // Delete
      @Mutation((returns) => InstrNarrative)
      async deleteInstrNarrative(
        @Args('instr_ref', { type: () => String }) instr_ref?: string,
        @Args('narr_type', { type: () => String }) narr_type?: string){
        return this.prisma.instr_narrative.delete(
          {
            where: {
              instr_ref_narr_type: {
                instr_ref: instr_ref,
                narr_type: narr_type,
              },
            },
          });
      }

  
}

