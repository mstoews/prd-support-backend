import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyExtRef } from '../../models/party.model';

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
    party_ext_ref as PartyExtRefModel,
    party_ext_refCreateInput,
    party_ext_refUpdateInput,
    party_ext_refWhereUniqueInput,
    party_ext_refWhereInput,
    party_ext_refOrderByInput,
  } from '@prisma/client';


  @Resolver('PartyExtRef')
  export class PartyExtRefResolver {
    
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [PartyExtRef])
  party_ext_ref() { 
      return this.prisma.party_ext_ref.findMany();
  }  
  
  @Query((returns) => PartyExtRef)
  party_ext_refByRef(ref: string) {
     return this.prisma.party_ext_ref.findOne({ where: {
       party_ref : ref,
      },              
    });
  }
  
  @Mutation((returns) => PartyExtRef)
  async createPartyExtReference(
    @Body() partyClassData: { 
        party_ref : string 
    },
  ): Promise<PartyExtRefModel> {
    const { party_ref } = partyClassData;
    return this.createOnePartyExtRef({
      party_ref,
    });
  }

  @Mutation((returns) => PartyExtRef)
  async createOnePartyExtRef(data: party_ext_refCreateInput): Promise<PartyExtRefModel> {
    return this.prisma.party_ext_ref.create({
      data,
    });
  }
  
  @Mutation((returns) => PartyExtRef)
  async updateParty(params: {
    where: party_ext_refWhereUniqueInput;
    data: party_ext_refUpdateInput;
  }): Promise<PartyExtRefModel> {
    const { data, where } = params;
    return this.prisma.party_ext_ref.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyExtRef)
  async deleteParty(where: party_ext_refWhereUniqueInput): Promise<PartyExtRefModel> {
    return this.prisma.party_ext_ref.delete({
      where,
    });
  }
}


