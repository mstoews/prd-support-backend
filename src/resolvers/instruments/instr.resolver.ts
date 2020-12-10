import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { InstrIdArgs} from '../../models/args/instr-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation, Subscription } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Instr, InstrClassification } from '../../models/instr.model';
import { PubSub } from 'graphql-subscriptions';
import { InstrInput } from '../../models/inputs/instr.input';
import { HttpPostService} from '../../services/http-post/http-post.service';
 
const pubsub = new PubSub();

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    Inject,
    Injectable,
  } from '@nestjs/common'

import { Prisma, instr as InstrModel } from '@prisma/client';

@Injectable()
@Resolver((of) => Instr)
export class InstrResolver {
  
  constructor(
    private prisma: PrismaService, private postService : HttpPostService
    ) 
  {}
  
  @Query((returns) => [Instr])
  async instr() { 
      console.log('Instr Query');
      return this.prisma.instr.findMany();
  }  

  
  @Query(returns => Instr)
  async instrByRefNo(@Args('ref', { type: () => String }) ref: string) {
    return this.prisma.instr.findUnique({ where: {
      instr_ref : ref,
     },              
   });
  }

  @Query((returns) => [Instr])
  async instrByType(@Args('instr_type',{ type: () => String}) type: string) {
    console.log('instrByType :', type );
     return this.prisma.instr.findMany({ where: {
       instr_type : type,
      },              
    });
  }

  @Query((returns) => Instr)
  async instrByRef(@Args('instr_ref',{ type: () => String}) ref: string) {
     return this.prisma.instr.findUnique({ where: {
       instr_ref : ref,
      },              
    });
  }

  @Query((returns) => String)
  async createInstrGlossXML(@Args('Type',{ type: () => String}) ref: string) {
    /*  TODO - need to fix this */
     return this.postService.updateGlossByPartyRef("TRADING");
  }

  @Mutation((returns) => Instr)
  async createInstrInput(@Args('data', { type: () => InstrInput })  newUserData: Prisma.instrCreateInput) {
    return this.prisma.instr.create({
      data: newUserData,
   });
  }

  @Subscription(returns => Instr)
  async instrMutated() {
    return pubsub.asyncIterator('instrMutated');
  }
  
  // Returns Party 
  async createInstr(data: Prisma.instrCreateInput): Promise<InstrModel> {
    return this.prisma.instr.create({
      data,
    });
    pubsub.publish('instrMutated', { instrMutated: data });
  }
  
  @Mutation((returns) => Instr)
  async updateInstr(params: {
    where: Prisma.instrWhereUniqueInput;
    data: Prisma.instrUpdateInput;
  }): Promise<InstrModel> {
    const { data, where } = params;
    return this.prisma.instr.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => Instr)
  async deleteInstr(where: Prisma.instrWhereUniqueInput): Promise<InstrModel> {
    return this.prisma.instr.delete({
      where,
    });
  }
}
