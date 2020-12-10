import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs } from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation, Subscription } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Party, PartyClassification } from '../../models/party.model';
import { PubSub } from 'graphql-subscriptions';
import { PartyInput } from '../../models/inputs/party.input';
import { HttpPostService } from '../../services/http-post/http-post.service';

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

import {
  Prisma,
  party as PartyModel,
} from '@prisma/client';

@Injectable()
@Resolver((of) => Party)
export class PartyResolver {

  constructor(
    private prisma: PrismaService, private postService: HttpPostService
  ) { }

  @Query((returns) => [Party])
  async party() {
    console.log('Party Query');
    return this.prisma.party.findMany();
  }

  @Query((returns) => Party)
  async firstPartyByType(@Args('party_type', { type: () => String }) pt: string) {
    console.log('partyByType :', pt);
    return this.prisma.party.findFirst({
      where: {
        party_type: pt,
      },
    });
  }

  @Query(returns => Party)
  async firstPartyType() {
    return this.prisma.party.findFirst();
  }

  @Query(returns => Party)
  async partyByRefNo(@Args('ref', { type: () => String }) ref: string) {
    return this.prisma.party.findUnique({
      where: {
        party_ref: ref,
      },
    });
  }

  @Query((returns) => [Party])
  async partyByType(@Args('party_type', { type: () => String }) pt: string) {
    console.log('partyByType :', pt);
    return this.prisma.party.findMany({
      where: {
        party_type: pt,
      },
    });
  }

  @Query((returns) => Party)
  async partyByRef(@Args('party_ref', { type: () => String }) ref: string) {
    return this.prisma.party.findUnique({
      where: {
        party_ref: ref,
      },
    });
  }
  
  @Query((returns) => Party)
  async partyByRefFirst(@Args('party_ref', { type: () => String }) ref: string) {
    return this.prisma.party.findFirst({
      where: {
        party_ref: ref,
      },
    });
  }


  @Query((returns) => String)
  async createPartyGlossXML(@Args('partyType', { type: () => String }) partyType: string) {
    console.log('createPartyGlossXLM : ', partyType);
    return this.postService.updateGlossByPartyRef(partyType);
  }

  // Delete
  @Mutation((returns) => Party)
  async deletePartyByRef(@Args('party_ref', { type: () => String }) ref: string) {
    console.log('deletePartyByRef : ', ref);
    return this.prisma.party.delete({
      where: {
        party_ref: ref,
      },
    });
  }

  // Update
  @Mutation((returns) => Party)
  async updatePartyByRef(
    @Args('party_ref',{ type: () => String }) party_ref?: string, 
    @Args('data',{ nullable: false}) data?: PartyInput,) 
  {
    console.log('createPartyByRef : ', data);
    return this.prisma.party.update({
      data: data,
      where: {
        party_ref: party_ref,
      }
    });
  }

  // Create 
  @Mutation((returns) => Party)
  async createPartyInput(@Args('data', { type: () => PartyInput }) newUserData: Prisma.partyCreateInput) {
    console.log('createPartyByRef : ', newUserData);
    return this.prisma.party.create({
      data: newUserData,
    });
  }

  @Subscription(returns => Party)
  async partyMutated() {
    return pubsub.asyncIterator('partyMutated');
  }

}
