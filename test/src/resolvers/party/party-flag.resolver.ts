import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyFlag } from '../../models/party.model';
import { PartyFlagInput} from '../../models/inputs/party.input';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import { party_flag as PartyFlagModel, Prisma } from '@prisma/client';


  @Resolver('PartyFlag')
  
  export class PartyFlagResolver {    
  constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [PartyFlag])
  async party_flag() { 
      return this.prisma.party_flag.findMany();
  }  

  @Query((returns) => [PartyFlag])
  async partyFlag() { 
      return this.prisma.party_flag.findMany();
  }  

  @Query((returns) => [PartyFlag])
  async partyFlagByRef( 
  @Args('party_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.party_flag.findMany({ where: {
       party_ref : ref,
      },              
    });
  }
  

  @Mutation((returns) => PartyFlag)
  async createPartyFlagInput(@Args('data', { type: () => PartyFlagInput })  newFlagData: Prisma.party_flagCreateInput) {
    return this.prisma.party_flag.create({
      data: newFlagData,
    });
  }

  @Mutation((returns) => PartyFlag)
  async createPartyFlag(data: Prisma.party_flagCreateInput): Promise<PartyFlagModel> {
    return this.prisma.party_flag.create({
      data,
    });
  }
  
  @Mutation((returns) => PartyFlag)
  async deleteParty(where: Prisma.party_flagWhereUniqueInput): Promise<PartyFlagModel> {
    return this.prisma.party_flag.delete({
      where,
    });
  }
}


/*
mutation {
	createPartyFlagInput( data: {
    party_ref: "CMP4"
    flag_code: "FLAG"
    flag_type: 2
    description: "A party flag"
    user_def: "U"
    version_no: 1
    version_user: "MST"
  }) {
    party_ref
    flag_code
    flag_type
    description
    version_no
    version_user
  }
} 
*/

