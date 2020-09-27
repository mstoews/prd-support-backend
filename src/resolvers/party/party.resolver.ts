import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation, Subscription } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Party, PartyClassification } from '../../models/party.model';
import { PubSub } from 'graphql-subscriptions';
import { PartyInput } from '../../models/inputs/party.input';

const pubsub = new PubSub();

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
    partyUpdateInput,
    party as PartyModel,
    partyCreateInput,
    partyWhereUniqueInput,
    partyWhereInput,
    partyOrderByInput,
    party_classificationArgs
  } from '@prisma/client';



@Resolver((of) => Party)
export class PartyResolver {
  
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [Party])
  async party() { 
      return this.prisma.party.findMany();
  }  

  // @ResolveField('classes', returns => [PartyClassification])
  // async getPosts(@Parent() party: party_classificationArgs) {
  //   return this.prisma.party_classification.findMany({ party });
  // }

  @Mutation((returns) => Party)
  async createPartyInput(@Args('data', { type: () => PartyInput })  newUserData: partyCreateInput) {
    return this.prisma.party.create({
      data: newUserData,
    });
  }
  
  @Query(returns => Party)
  async partyByRefNo(@Args('ref', { type: () => String }) ref: string) {
    return this.prisma.party.findOne({ where: {
      party_ref : ref,
     },              
   });
  }


  @Query((returns) => Party)
  async partyByRef(@Args('party_ref',{ type: () => String}) ref: string) {
     return this.prisma.party.findOne({ where: {
       party_ref : ref,
      },              
    });
  }
  
  @Subscription(returns => Party)
  async partyMutated() {
    return pubsub.asyncIterator('partyMutated');
  }
  
  /*
  @Mutation((returns) => Party)
  async createParty(
    @Body() partyData: { 
        party_ref : string 
    },
  ): Promise<PartyModel> {
    const { party_ref } = partyData;
    return this.createOneParty({
      party_ref,
    });
  }
*/

  // Returns Party 
  async createOneParty(data: partyCreateInput): Promise<PartyModel> {
    return this.prisma.party.create({
      data,
    });
    pubsub.publish('partyMutated', { partyMutated: data });
  }
  
  @Mutation((returns) => Party)
  async updateParty(params: {
    where: partyWhereUniqueInput;
    data: partyUpdateInput;
  }): Promise<PartyModel> {
    const { data, where } = params;
    return this.prisma.party.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => Party)
  async deleteParty(where: partyWhereUniqueInput): Promise<PartyModel> {
    return this.prisma.party.delete({
      where,
    });
  }
}
