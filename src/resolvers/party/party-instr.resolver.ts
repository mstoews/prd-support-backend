import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyInstr } from '../../models/party.model';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import {
    party_instr as PartyInstrModel,
    party_instrCreateInput,
    party_instrUpdateInput,
    party_instrWhereUniqueInput,
    party_instrWhereInput,
    party_instrOrderByInput,
  } from '@prisma/client';

  @Resolver('PartyInstr')
    export class PartyInstrResolver {
    constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [PartyInstr])
  party_instr() { 
      return this.prisma.party_instr.findMany();
  }  
  
  /*
  @Query((returns) => PartyInstr)
  party_instrByRef(ref: string) {
     return this.prisma.party_instr.findOne({ where: {
       party_ref : ref,
      },              
    });
  }
  
  @Mutation((returns) => PartyInstr)
  async createPartyInstr(
    @Body() partyClassData: { 
        party_ref : string 
    },
  ): Promise<PartyInstrModel> {
    const { party_ref } = partyClassData;
    return this.createOnePartyInstr({
      party_ref,
    });
  }
*/
  @Mutation((returns) => PartyInstr)
  async createOnePartyInstr(data: party_instrCreateInput): Promise<PartyInstrModel> {
    return this.prisma.party_instr.create({
      data,
    });
  }
  
  @Mutation((returns) => PartyInstr)
  async updateParty(params: {
    where: party_instrWhereUniqueInput;
    data: party_instrUpdateInput;
  }): Promise<PartyInstrModel> {
    const { data, where } = params;
    return this.prisma.party_instr.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyInstr)
  async deleteParty(where: party_instrWhereUniqueInput): Promise<PartyInstrModel> {
    return this.prisma.party_instr.delete({
      where,
    });
  }
}

