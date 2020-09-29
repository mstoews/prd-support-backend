import { PrismaService } from '../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs} from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartyClassification } from '../../models/party.model';
import { PartyClassInput} from '../../models/inputs/party.input';

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
    party_classification as ClassModel,
    party_classificationCreateInput,
    party_classificationUpdateInput,
    party_classificationWhereUniqueInput,
    party_classificationWhereInput,
    party_classificationOrderByInput,
    partyCreateInput,
  } from '@prisma/client';


@Resolver((of) => PartyClassification)
export class PartyClassificationResolver {
  
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [PartyClassification])
  party_classification() { 
      return this.prisma.party_classification.findMany();
  }  
  

  @Query((returns) => [PartyClassification])
  party_classificationByRefAndClass(
    @Args('party_ref',{ nullable: false}) party_ref?: string, 
    @Args('class_type',{ nullable: false}) class_type?: string,) 
    {
      return this.prisma.party_classification.findMany({ where: {
       class_type : class_type,
       party_ref : party_ref, 
      },              
    });
  }

  @Query((returns) => [PartyClassification])
  party_classificationByRef(
    @Args('party_ref',{ nullable: false}) party_ref?: string) 
    {
      return this.prisma.party_classification.findMany({ where: {
      party_ref : party_ref, 
      },              
    });
  }
  


  @Mutation((returns) => PartyClassification)
  async createPartyClassification(@Args('data', { type: () => PartyClassInput })  newClassData: partyCreateInput) {
    return this.prisma.party.create({
      data: newClassData,
    });
  }
  
  
  // @Mutation((returns) => PartyClassification)
  // async createPartyClassification(data: party_classificationCreateInput): Promise<ClassModel> {
  //   return this.prisma.party_classification.create({
  //     data,
  //   });
  // }
  
  @Mutation((returns) => PartyClassification)
  async updateParty(params: {
    where: party_classificationWhereUniqueInput;
    data: party_classificationUpdateInput;
  }): Promise<ClassModel> {
    const { data, where } = params;
    return this.prisma.party_classification.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyClassification)
  async deleteParty(where: party_classificationWhereUniqueInput): Promise<ClassModel> {
    return this.prisma.party_classification.delete({
      where,
    });
  }
}




