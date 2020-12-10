import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation, Subscription } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Party, PartyClassification } from '../../models/party.model';
import { PubSub } from 'graphql-subscriptions';
import { PartyInput } from '../../models/inputs/party.input';
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

import { Prisma, party as PartyModel } from '@prisma/client';

@Injectable()
@Resolver((of) => Party)
export class PartyResolver {
  
  constructor(
    private prisma: PrismaService, private postService : HttpPostService
    ) 
{}
  
  @Query((returns) => [Party])
  async party() { 
      console.log('Party Query');
      return this.prisma.party.findMany();
  }  

  
  @Query(returns => Party)
  async partyByRefNo(@Args('ref', { type: () => String }) ref: string) {
    return this.prisma.party.findUnique({ where: {
      party_ref : ref,
     },              
   });
  }

  @Query((returns) => [Party])
  async partyByType(@Args('party_type',{ type: () => String}) pt: string) {
    console.log('partyByType :', pt );
     return this.prisma.party.findMany({ where: {
       party_type : pt,
      },              
    });
  }

  @Query((returns) => Party)
  async partyByRef(@Args('party_ref',{ type: () => String}) ref: string) {
     return this.prisma.party.findUnique({ where: {
       party_ref : ref,
      },              
    });
  }

  @Query((returns) => String)
  async updatePartyGlossXML(@Args('party_ref',{ type: () => String}) partyRef: string) {
     console.log('updatePartyGlossXLM : ', partyRef);
     return this.postService.updateGlossByPartyRef(partyRef);
  }

  @Mutation((returns) => Party)
  async createPartyInput(@Args('data', { type: () => PartyInput })  newUserData: Prisma.partyCreateInput) {
    return this.prisma.party.create({
      data: newUserData,
   });
  }

  @Subscription(returns => Party)
  async partyMutated() {
    return pubsub.asyncIterator('partyMutated');
  }
  
  // Returns Party 
  async createParty(data: Prisma.partyCreateInput): Promise<PartyModel> {
    return this.prisma.party.create({
      data,
    });
    pubsub.publish('partyMutated', { partyMutated: data });
  }
  
  @Mutation((returns) => Party)
  async updateParty(params: {
    where: Prisma.partyWhereUniqueInput;
    data: Prisma.partyUpdateInput;
  }): Promise<PartyModel> {
    const { data, where } = params;
    return this.prisma.party.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => Party)
  async deleteParty(where: Prisma.partyWhereUniqueInput): Promise<PartyModel> {
    return this.prisma.party.delete({
      where,
    });
  }
}
