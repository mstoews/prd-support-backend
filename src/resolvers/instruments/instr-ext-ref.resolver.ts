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
  async instr_ext_refByRef( 
  @Args('instr_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.instr_ext_ref.findMany({ where: {
       instr_ref : ref,
      },              
    });
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

  
  @Mutation((returns) => InstrExtRef)
  async updateInstr(params: {
    where: Prisma.instr_ext_refWhereUniqueInput;
    data: Prisma.instr_ext_refUpdateInput;
  }): Promise<InstrExtRefModel> {
    const { data, where } = params;
    return this.prisma.instr_ext_ref.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => InstrExtRef)
  async deleteInstr(where: Prisma.instr_ext_refWhereUniqueInput): Promise<InstrExtRefModel> {
    return this.prisma.instr_ext_ref.delete({
      where,
    });
  }
}



