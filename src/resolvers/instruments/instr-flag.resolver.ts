import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { InstrIdArgs} from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { InstrFlag } from '../../models/instr.model';
import { InstrFlagInput} from '../../models/inputs/instr.input';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import { instr_flag as InstrFlagModel, Prisma } from '@prisma/client';


  @Resolver('InstrFlag')
  
  export class InstrFlagResolver {    
  constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [InstrFlag])
  async instr_flag() { 
      return this.prisma.instr_flag.findMany();
  }  

  @Query((returns) => [InstrFlag])
  async instrFlag() { 
      return this.prisma.instr_flag.findMany();
  }  

  @Query((returns) => [InstrFlag])
  async instrFlagByRef( 
  @Args('instr_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.instr_flag.findMany({ where: {
       instr_ref : ref,
      },              
    });
  }
  

  @Mutation((returns) => InstrFlag)
  async createInstrFlagInput(@Args('data', { type: () => InstrFlagInput })  newFlagData: Prisma.instr_flagCreateInput) {
    return this.prisma.instr_flag.create({
      data: newFlagData,
    });
  }

  @Mutation((returns) => InstrFlag)
  async createInstrFlag(data: Prisma.instr_flagCreateInput): Promise<InstrFlagModel> {
    return this.prisma.instr_flag.create({
      data,
    });
  }  
  /*
  @Mutation((returns) => InstrFlag)
  async deleteInstr(where: instr_flagWhereUniqueInput): Promise<InstrFlagModel> {
    return this.prisma.instr_flag.delete({
      where,
    });
  }
  */
}


