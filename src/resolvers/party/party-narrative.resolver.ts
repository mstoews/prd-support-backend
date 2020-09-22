

import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { PartyIdArgs } from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyNarrative } from '../../models/party.model';
import { PartyNarrativeArgs } from 'src/models/inputs/party.input';

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
  async partyNarrative() { 
      return this.prisma.party_narrative.findMany();
  }
  
  @Query((returns) => [PartyNarrative])
  async partyNarrativeByRef(@Args('party_ref',{ type: () => String}) ref: string) {
   return this.prisma.party_narrative.findMany({ where: {
     party_ref : ref,
    },              
  });
  }
  
 
  @Query((returns) => [PartyNarrative])
   async partyNarrativeByRefAndType(
    @Args('party_ref',{ nullable: false}) party_ref?: string, 
    @Args('narrative_type',{ nullable: false}) narr_type?: string,) 
    {
      return this.prisma.party_narrative.findMany({ where: {
       party_ref : party_ref, 
       narr_type : narr_type,
      },              
    });
  }
 

  @Mutation((returns) => PartyNarrative)
  async updateNarrative(params: {
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
  async deleteNarrative(where: party_narrativeWhereUniqueInput): Promise<PartyNarrativeModel> {
    return this.prisma.party_narrative.delete({
      where,
    });
  }
}




