import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { InstrIdArgs} from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { InstrExtRef } from '../../models/instr.model';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import { instr_ext_ref as InstrExtRefModel, Prisma } from '@prisma/client';
import { InstrInput, InstrExtRefInput } from 'src/models/inputs/instr.input';


  @Resolver('InstrExtRef')
  export class InstrExtRefResolver {
    
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [InstrExtRef])
  instr_ext_ref() { 
      return this.prisma.instr_ext_ref.findMany();
  } 

  @Query((returns) => [InstrExtRef])
  instrExtRef() { 
      return this.prisma.instr_ext_ref.findMany();
  }
  
  @Query((returns) => [InstrExtRef])
  async instrExtRefByRef( 
  @Args('instr_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.instr_ext_ref.findMany({ where: {
       instr_ref : ref,
      },              
    });
  }
  


 @Mutation((returns) => InstrExtRef)
 async createInstrInput(@Args('data', { type: () => InstrExtRefInput })  newInstrExtData: Prisma.instr_ext_refCreateInput) {
   return this.prisma.instr_ext_ref.create({
     data: newInstrExtData,
   });
 }

// Create 
@Mutation((returns) => InstrExtRef)
async createInstrExtRef(@Args('data', { type: () => InstrExtRefInput })  newUserData: Prisma.instr_ext_refCreateInput) {
  return this.prisma.instr_ext_ref.create({
    data: newUserData,
 });
}

// Update
@Mutation((returns) => InstrExtRef)
async updateInstrExtRef(
  @Args('instr_ref', { type: () => String }) instr_ref?: string,
  @Args('instr_ext_ref_type', { type: () => String }) instr_ext_ref_type?: string,
  @Args('data', { type: () => InstrExtRefInput }) newData?: InstrExtRefModel,) {
  return this.prisma.instr_ext_ref.update(
    {
      where: {
        instr_ref_instr_ext_ref_type: {
          instr_ref: instr_ref,
          instr_ext_ref_type: instr_ext_ref_type
        },
      },
      data: newData,

    });
}

// Delete
@Mutation((returns) => InstrExtRef)
async deleteInstrExtRef(
  @Args('instr_ref', { type: () => String }) instr_ref?: string,
  @Args('instr_ext_ref_type', { type: () => String }) instr_ext_ref_type?: string,) {
  return this.prisma.instr_ext_ref.delete(
    {
      where: {
        instr_ref_instr_ext_ref_type: {
          instr_ref: instr_ref,
          instr_ext_ref_type: instr_ext_ref_type
        },
      },
    });
}
  
}



