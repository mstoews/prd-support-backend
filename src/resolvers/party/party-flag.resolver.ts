import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyFlag } from '../../models/party.model';

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
    party_flag as PartyFlagModel,
    party_flagCreateInput,
    party_flagUpdateInput,
    party_flagWhereUniqueInput,
    party_flagWhereInput,
    party_flagOrderByInput,
  } from '@prisma/client';


  @Resolver('PartyFlag')
  
  export class PartyFlagResolver {    
  constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [PartyFlag])
  party_flag() { 
      return this.prisma.party_flag.findMany();
  }  
  
  @Query((returns) => PartyFlag)
  party_flagByRef(ref: string) {
     return this.prisma.party_flag.findOne({ where: {
       party_ref : ref,
      },              
    });
  }
  
  @Mutation((returns) => PartyFlag)
  async createPartyFlag(
    @Body() partyClassData: { 
        party_ref : string 
    },
  ): Promise<PartyFlagModel> {
    const { party_ref } = partyClassData;
    return this.createOnePartyFlag({
      party_ref,
    });
  }

  @Mutation((returns) => PartyFlag)
  async createOnePartyFlag(data: party_flagCreateInput): Promise<PartyFlagModel> {
    return this.prisma.party_flag.create({
      data,
    });
  }
  
  @Mutation((returns) => PartyFlag)
  async updateParty(params: {
    where: party_flagWhereUniqueInput;
    data: party_flagUpdateInput;
  }): Promise<PartyFlagModel> {
    const { data, where } = params;
    return this.prisma.party_flag.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyFlag)
  async deleteParty(where: party_flagWhereUniqueInput): Promise<PartyFlagModel> {
    return this.prisma.party_flag.delete({
      where,
    });
  }
}



