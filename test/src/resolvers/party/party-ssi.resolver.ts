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

import { party_ssi as PartyssiModel, Prisma } from '@prisma/client';

  @Resolver((of) => PartySSI)
  export class PartySSIResolver {
  
  constructor(private prisma: PrismaService) {}
  
  @Query((returns) => [PartySSI])
    party_ssi() { 
        return this.prisma.party_ssi.findMany();
    }  
    
  @Query((returns) => [PartySSI])
    partySSI() { 
        return this.prisma.party_ssi.findMany();
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
    async createSSI(@Args('data', { type: () => PartySSIInput })  newInstrumentData: Prisma.party_ssiCreateInput) {
    return this.prisma.party_ssi.create({
      data: newInstrumentData,
    });
  }
  
  @Mutation((returns) => PartySSI)
  async updateSSI(params: {
    where: Prisma.party_ssiWhereUniqueInput;
    data: Prisma.party_ssiUpdateInput;
  }): Promise<PartyssiModel> {
    const { data, where } = params;
    return this.prisma.party_ssi.update({
      data,
      where,
    });
  }


  
  @Mutation((returns) => PartySSI)
  async deleteSSI(where: Prisma.party_ssiWhereUniqueInput): Promise<PartyssiModel> {
    return this.prisma.party_ssi.delete({
      where,
    });
  }
}

