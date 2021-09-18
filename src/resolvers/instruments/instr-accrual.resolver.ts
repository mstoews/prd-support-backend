

import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { InstrIdArgs } from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { InstrAccrualInput } from '../../models/inputs/instr.input';
import { InstrAccrual } from '../../models/instr.model'
import { InstrAccrualArgs } from '../../models/args/instr-ref.args';

import { instr_accrual as InstrAccrualModel, Prisma } from '@prisma/client';


@Resolver('InstrAccrual')
export class InstrAccrualResolver {
  constructor(
    private prisma: PrismaService) { }

  @Query((returns) => [InstrAccrual])
  async instrAccrual() {
    return this.prisma.instr_accrual.findMany();
  }

  @Query((returns) => [InstrAccrual])
  async instrAccrualByRef(@Args('instr_ref', { type: () => String }) ref: string) {
    return this.prisma.instr_accrual.findMany({
      where: {
        instr_ref: ref,
      },
    });
  }

  @Query((returns) => [InstrAccrual])
  async instrAccrualByRefAndSeq(
    @Args('instr_ref', { nullable: false }) instr_ref?: string,
    @Args('seq_no', { nullable: false }) seq_no?: number,) {
    return this.prisma.instr_accrual.findMany({
      where: {
        instr_ref: instr_ref,
        seq_no: seq_no,
      },
    });
  }

  // Create
  @Mutation((returns) => InstrAccrual)
  async createInstrAccrual(@Args('data', { type: () => InstrAccrualInput }) newClassData: Prisma.instr_accrualCreateInput) {
    return this.prisma.instr_accrual.create({
      data: newClassData,
    });
  }

  // Mutation
  @Mutation((returns) => InstrAccrual)
  async updateInstrAccrual(
    @Args('instr_ref', { type: () => String }) party_ref?: string,
    @Args('seq_no', { type: () => Number }) depot_alias?: number,
    @Args('data', { type: () => InstrAccrualInput }) newData?: InstrAccrualModel,) {
    return this.prisma.instr_accrual.update(
      {
        where: {
          instr_ref_seq_no: {
            instr_ref: party_ref,
            seq_no: depot_alias,
          },
        },
        data: newData,
      });
  }

  // Delete
  @Mutation((returns) => InstrAccrual)
  async deleteInstrAccrual(
    @Args('instr_ref', { type: () => String }) party_ref?: string,
    @Args('seq_no', { type: () => Number }) depot_alias?: number,) {
    return this.prisma.instr_accrual.delete(
      {
        where: {
          instr_ref_seq_no: {
            instr_ref: party_ref,
            seq_no: depot_alias,
          },
        },
      });
  }

}

