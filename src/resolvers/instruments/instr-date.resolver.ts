import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { InstrIdArgs} from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { InstrDate } from '../../models/instr.model';
import { InstrDateInput} from '../../models/inputs/instr.input';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import { instr_date as InstrDateModel, Prisma } from '@prisma/client';


  @Resolver('InstrDate')
  export class InstrDateResolver {    
  constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [InstrDate])
  async instr_date() { 
      return this.prisma.instr_date.findMany();
  }  

  @Query((returns) => [InstrDate])
  async instrDate() { 
      return this.prisma.instr_date.findMany();
  }  

  @Query((returns) => [InstrDate])
  async instrDateByRef( 
  @Args('instr_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.instr_date.findMany({ where: {
       instr_ref : ref,
      },              
    });
  }
  
  @Mutation((returns) => InstrDate)
  async createInstrDateInput(@Args('data', { type: () => InstrDateInput })  newDateData: Prisma.instr_dateCreateInput) {
    return this.prisma.instr_date.create({
      data: newDateData,
    });
  }

  @Mutation((returns) => InstrDate)
  async createInstrDate(data: Prisma.instr_dateCreateInput): Promise<InstrDateModel> {
    return this.prisma.instr_date.create({
      data,
    });
  }
  
  @Mutation((returns) => InstrDate)
  async deleteInstr(where: Prisma.instr_dateWhereUniqueInput): Promise<InstrDateModel> {
    return this.prisma.instr_date.delete({
      where,
    });
  }
}
