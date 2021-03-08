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
  

// Create 
@Mutation((returns) => InstrDate)
async createInstrInput(@Args('data', { type: () => InstrDateInput })  newUserData: Prisma.instr_dateCreateInput) {
  return this.prisma.instr_date.create({
    data: newUserData,
 });
}

// Update
@Mutation((returns) => InstrDate)
async updateInstrDate(
  @Args('instr_ref', { type: () => String }) instr_ref?: string,
  @Args('date_type', { type: () => String }) date_type?: string,
  @Args('data', { type: () => InstrDateInput }) newData?: InstrDateModel,) {
  return this.prisma.instr_date.update(
    {
      where: {
        instr_ref_date_type: {
          instr_ref: instr_ref,
          date_type: date_type,
        },
      },
      data: newData,

    });
}

// Delete
@Mutation((returns) => InstrDate)
async deleteInstrDate(
  @Args('party_ref', { type: () => String }) party_ref?: string,
  @Args('class_type', { type: () => String }) class_type?: string,) {
  return this.prisma.instr_classification.delete(
    {
      where: {
        instr_ref_class_type: {
          instr_ref: party_ref,
          class_type: class_type,
        },
      },
    });
}
}
