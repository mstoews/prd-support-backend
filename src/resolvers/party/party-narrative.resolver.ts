

import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { PartyIdArgs } from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyNarrative } from '../../models/party.model';
import {  PartyNarrativeInput } from 'src/models/inputs/party.input';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import { party_narrative as PartyNarrativeModel, Prisma } from '@prisma/client';


  @Resolver('PartyNarrative')
  export class PartyNarrativeResolver {
      constructor(
    private prisma: PrismaService) {}
  
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
 // Create
  @Mutation((returns) => PartyNarrative)
  async createPartyNarrative(@Args('data', { type: () => PartyNarrativeInput }) newUserData: Prisma.party_narrativeCreateInput) {
    return this.prisma.party_narrative.create({
      data: newUserData,
    });
  }
 
 
  // Update
  @Mutation((returns) => PartyNarrative)
  async updatePartyNarrative(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('narr_type', { type: () => String }) narr_type?: string, 
    @Args('newData', { type: () => PartyNarrativeInput }) newData?: PartyNarrativeModel,)
    {
    return this.prisma.party_narrative.update({
        where: {
          party_ref_narr_type: {
            party_ref: party_ref,
            narr_type: narr_type,
          }
        },
        data: newData
      });
  }

  // Delete
  @Mutation((returns) => PartyNarrative)
  async deleteNarrative(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('narr_type', { type: () => String }) narr_type?: string,) {
    return this.prisma.party_narrative.delete(
      {
        where: {
          party_ref_narr_type: {
            party_ref: party_ref,
            narr_type: narr_type,
          },
        },
      });
  }
  
}




