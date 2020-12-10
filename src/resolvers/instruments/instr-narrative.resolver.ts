

import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { InstrIdArgs } from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { InstrNarrative } from '../../models/instr.model';
import { InstrNarrativeArgs } from 'src/models/inputs/instr.input';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

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

  @Mutation((returns) => InstrNarrative)
  async updateNarrative(params: {
    where: Prisma.instr_narrativeWhereUniqueInput;
    data: Prisma.instr_narrativeUpdateInput;
  }): Promise<InstrNarrativeModel> {
    const { data, where } = params;
    return this.prisma.instr_narrative.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => InstrNarrative)
  async deleteNarrative(where: Prisma.instr_narrativeWhereUniqueInput): Promise<InstrNarrativeModel> {
    return this.prisma.instr_narrative.delete({
      where,
    });
  }
}

