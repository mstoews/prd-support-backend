import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartySSI } from '../../models/party.model';
import { PartySSIInput} from '../../models/inputs/party.input';

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
    party_ssi as PartyssiModel,
    party_ssiCreateInput,
    party_ssiUpdateInput,
    party_ssiWhereUniqueInput,
    party_ssiWhereInput,
    party_ssiOrderByInput,
  } from '@prisma/client';

  @Resolver((of) => PartySSI)
  export class PartySSIResolver {
  
  constructor(private prisma: PrismaService) {}
  
  @Query((returns) => [PartySSI])
    party_ssi() { 
        return this.prisma.party_ssi.findMany();
    }  
    
  @Mutation((returns) => PartySSI)
    async createSSI(@Args('data', { type: () => PartySSIInput })  newInstrumentData: party_ssiCreateInput) {
    return this.prisma.party_ssi.create({
      data: newInstrumentData,
    });
  }
  
  @Mutation((returns) => PartySSI)
  async updateSSI(params: {
    where: party_ssiWhereUniqueInput;
    data: party_ssiUpdateInput;
  }): Promise<PartyssiModel> {
    const { data, where } = params;
    return this.prisma.party_ssi.update({
      data,
      where,
    });
  }


  @Query((returns) => [PartySSI])
  async partySSIByRef( 
  @Args('party_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.party_ssi.findMany({ where: {
       party_ref : ref,
      },              
    });
  }
  
  @Mutation((returns) => PartySSI)
  async deleteSSI(where: party_ssiWhereUniqueInput): Promise<PartyssiModel> {
    return this.prisma.party_ssi.delete({
      where,
    });
  }
}

