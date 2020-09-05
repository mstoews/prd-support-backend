

import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyNarrative } from '../../models/party.model';

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
    party_narrative as PartyNarrativeModel,
    party_narrativeCreateInput,
    party_narrativeUpdateInput,
    party_narrativeWhereUniqueInput,
    party_narrativeWhereInput,
    party_narrativeOrderByInput,
  } from '@prisma/client';

  @Resolver('PartyNarrative')
  export class PartyNarrativeResolver {
      constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [PartyNarrative])
  party_narrative() { 
      return this.prisma.party_narrative.findMany();
  }  
  
  @Query((returns) => PartyNarrative)
  party_narrativeByRef(ref: string) {
     return this.prisma.party_narrative.findOne({ where: {
       party_ref : ref,
      },              
    });
  }
  
  @Mutation((returns) => PartyNarrative)
  async createPartyNarrativer(
    @Body() partyClassData: { 
        party_ref : string 
    },
  ): Promise<PartyNarrativeModel> {
    const { party_ref } = partyClassData;
    return this.createOnePartyNarrativer({
      party_ref,
    });
  }

  @Mutation((returns) => PartyNarrative)
  async createOnePartyNarrativer(data: party_narrativeCreateInput): Promise<PartyNarrativeModel> {
    return this.prisma.party_narrative.create({
      data,
    });
  }
  
  @Mutation((returns) => PartyNarrative)
  async updateParty(params: {
    where: party_narrativeWhereUniqueInput;
    data: party_narrativeUpdateInput;
  }): Promise<PartyNarrativeModel> {
    const { data, where } = params;
    return this.prisma.party_narrative.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyNarrative)
  async deleteParty(where: party_narrativeWhereUniqueInput): Promise<PartyNarrativeModel> {
    return this.prisma.party_narrative.delete({
      where,
    });
  }
}




