import { PrismaService } from '../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { InstrIdArgs} from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { InstrClassification } from '../../models/instr.model';
import { InstrClassInput} from '../../models/inputs/instr.input';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import { instr_classification as ClassModel, Prisma } from '@prisma/client';


@Resolver((of) => InstrClassification)
export class InstrClassificationResolver {
  
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [InstrClassification])
  instr_classification() { 
      return this.prisma.instr_classification.findMany();
  }  
  

  @Query((returns) => [InstrClassification])
  instr_classificationByRefAndClass(
    @Args('instr_ref',{ nullable: false}) instr_ref?: string, 
    @Args('class_type',{ nullable: false}) class_type?: string,) 
    {
      return this.prisma.instr_classification.findMany({ where: {
       class_type : class_type,
       instr_ref : instr_ref, 
      },              
    });
  }


  @Query((returns) => [InstrClassification])
  instrClassification() { 
      return this.prisma.instr_classification.findMany();
  }  
  

  @Query((returns) => [InstrClassification])
  instrClassificationByRefAndClass(
    @Args('instr_ref',{ nullable: false}) instr_ref?: string, 
    @Args('class_type',{ nullable: false}) class_type?: string,) 
    {
      return this.prisma.instr_classification.findMany({ where: {
       class_type : class_type,
       instr_ref : instr_ref, 
      },              
    });
  }

  @Query((returns) => [InstrClassification])
  instr_classificationByRef(
    @Args('instr_ref',{ nullable: false}) instr_ref?: string) 
    {
      return this.prisma.instr_classification.findMany({ where: {
      instr_ref : instr_ref, 
      },              
    });
  }

  @Query((returns) => [InstrClassification])
  instrClassificationByRef(
    @Args('instr_ref',{ nullable: false}) instr_ref?: string) 
    {
      return this.prisma.instr_classification.findMany({ where: {
      instr_ref : instr_ref, 
      },              
    });
  }

  @Mutation((returns) => InstrClassification)
  async createInstrClassification(@Args('data', { type: () => InstrClassInput })  newClassData: Prisma.instrCreateInput) {
    return this.prisma.instr.create({
      data: newClassData,
    });
  }
  
  @Mutation((returns) => InstrClassification)
  async updateInstr(params: {
    where: Prisma.instr_classificationWhereUniqueInput;
    data: Prisma.instr_classificationUpdateInput;
  }): Promise<ClassModel> {
    const { data, where } = params;
    return this.prisma.instr_classification.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => InstrClassification)
  async deleteInstr(where: Prisma.instr_classificationWhereUniqueInput): Promise<ClassModel> {
    return this.prisma.instr_classification.delete({
      where,
    });
  }
}

