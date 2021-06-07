import { PrismaService } from './../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation, Subscription } from '@nestjs/graphql';
import { Instr, InstrClassification } from '../../models/instr.model';
import { InstrInput } from '../../models/inputs/instr.input';
import { HttpPostService} from '../../services/http-post/http-post.service';
import { Injectable } from '@nestjs/common'

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
     //return this.postService.updateGlossByPartyRef("TRADING");
  }

 // Create 
 @Mutation((returns) => Instr)
  async createInstrInput(@Args('data', { type: () => InstrInput })  newUserData: Prisma.instrCreateInput) {
    return this.prisma.instr.create({
      data: newUserData,
   });
  }

// Update
@Mutation((returns) => Instr)
async updateInstrByRef(
  @Args('instr_ref',{ type: () => String }) instrRef?: string, 
  @Args('data',{ nullable: false}) data?: InstrInput,) 
{
  return this.prisma.instr.update({
    data: data,
    where: {
      instr_ref: instrRef,
    }
  });
}

// Delete
@Mutation((returns) => Instr)
   async deleteInstrByRef(
    @Args('instr_ref',{ type: () => String }) instrRef?: string, ) {
     return this.prisma.instr.delete({
       where: {
         instr_ref: instrRef,
       },
     });
 }
 
}
