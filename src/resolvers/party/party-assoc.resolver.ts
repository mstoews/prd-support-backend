import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyAssoc } from '../../models/party.model';
import { PartyAssocInput} from '../../models/inputs/party.input';

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
    party_assoc as PartyAssocModel,
    party_assocCreateInput,
    party_assocUpdateInput,
    party_assocWhereUniqueInput,
    party_assocWhereInput,
    party_assocOrderByInput,
  } from '@prisma/client';

  @Resolver((of) => PartyAssoc)
  export class PartyAssocResolver {

  constructor(private prisma: PrismaService) {}
  
  @Query((returns) => [PartyAssoc])
    party_assoc() { 
        return this.prisma.party_assoc.findMany();
    }  

  @Query((returns) => [PartyAssoc])
    partyAssoc() { 
        return this.prisma.party_assoc.findMany();
    }  

  @Query((returns) => [PartyAssoc])
  async partyAssocByRef( 
  @Args('party_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.party_assoc.findMany({ where: {
       party_ref : ref,
      },              
    });
  }

  @Query((returns) => [PartyAssoc])
  partyAssocByRefAndType(
    @Args('party_ref',{ nullable: false}) party_ref?: string, 
    @Args('assoc_type',{ nullable: false}) assoc_type?: string,) 
    {
      return this.prisma.party_classification.findMany({ where: {
       party_ref : party_ref, 
       class_type : assoc_type,
      },              
    });
  }

    
  @Mutation((returns) => PartyAssoc)
    async createAssoc(@Args('data', { type: () => PartyAssocInput })  newInstrumentData: party_assocCreateInput) {
    return this.prisma.party_assoc.create({
      data: newInstrumentData,
    });
  }
  
  @Mutation((returns) => PartyAssoc)
  async updateAssoc(params: {
    where: party_assocWhereUniqueInput;
    data: party_assocUpdateInput;
  }): Promise<PartyAssocModel> {
    const { data, where } = params;
    return this.prisma.party_assoc.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyAssoc)
  async deleteAssoc(where: party_assocWhereUniqueInput): Promise<PartyAssocModel> {
    return this.prisma.party_assoc.delete({
      where,
    });
  }
}

