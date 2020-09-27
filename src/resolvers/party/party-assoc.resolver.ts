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

  @Resolver('PartyAssoc')
  export class PartyInstrResolver {
  
  constructor(private prisma: PrismaService) {}
  
  @Query((returns) => [PartyAssoc])
    party_instr() { 
        return this.prisma.party_assoc.findMany();
    }  
    
  @Mutation((returns) => PartyAssoc)
    async createPartyInstrumentInput(@Args('data', { type: () => PartyAssocInput })  newInstrumentData: party_assocCreateInput) {
    return this.prisma.party_assoc.create({
      data: newInstrumentData,
    });
  }
  
  @Mutation((returns) => PartyAssoc)
  async updateParty(params: {
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
  async deleteParty(where: party_assocWhereUniqueInput): Promise<PartyAssocModel> {
    return this.prisma.party_assoc.delete({
      where,
    });
  }
}

