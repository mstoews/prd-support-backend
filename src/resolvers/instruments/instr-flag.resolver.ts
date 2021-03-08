import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { InstrIdArgs } from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { InstrFlag } from '../../models/instr.model';
import { InstrFlagInput } from '../../models/inputs/instr.input';

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
    private prisma: PrismaService) { }

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
    @Args('instr_ref', { nullable: false }) ref?: string) {
    return this.prisma.instr_flag.findMany({
      where: {
        instr_ref: ref,
      },
    });
  }


  // Create 
  @Mutation((returns) => InstrFlag)
  async createInstrFlag(@Args('data', { type: () => InstrFlagInput }) newUserData: Prisma.instr_flagCreateInput) {
    return this.prisma.instr_flag.create({
      data: newUserData,
    });
  }

  // Update
  @Mutation((returns) => InstrFlag)
  async updateInstrFlag(
    @Args('instr_ref', { type: () => String }) instr_ref?: string,
    @Args('flag_type', { type: () => Number }) flag_type?: number,
    @Args('flag_code', { type: () => String }) flag_code?: string,
    @Args('data', { type: () => InstrFlagInput }) newData?: InstrFlagModel,) {
    return this.prisma.instr_flag.update(
      {
        where: {
          instr_ref_flag_type_flag_code: {
            instr_ref: instr_ref,
            flag_type: flag_type,
            flag_code: flag_code
          },
        },
        data: newData,

      });
  }

  // Delete
  @Mutation((returns) => InstrFlag)
  async deleteInstrFlag(
    @Args('instr_ref', { type: () => String }) instr_ref?: string,
    @Args('flag_type', { type: () => Number }) flag_type?: number,
    @Args('flag_code', { type: () => String }) flag_code?: string,) {
    return this.prisma.instr_flag.delete(
      {
        where: {
          instr_ref_flag_type_flag_code: {
            instr_ref: instr_ref,
            flag_type: flag_type,
            flag_code: flag_code
          },
        },
      });
  }
}


