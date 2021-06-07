import { PrismaService } from './../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { PartyAssoc } from '../../models/party.model';
import { PartyAssocInput} from '../../models/inputs/party.input';

import {
    party_assoc as PartyAssocModel,
    Prisma ,
  } from '@prisma/client';

  @Resolver((of) => PartyAssoc)
  export class PartyAssocResolver {

  constructor(private prisma: PrismaService) {}
  
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
      return this.prisma.party_assoc.findMany({ where: {
       party_ref : party_ref, 
       assoc_type : assoc_type,
      },              
    });
  }
  // Create Associaton
  @Mutation((returns) => PartyAssoc)
  async createPartyAssoc(@Args('data', { type: () => PartyAssocInput }) newUserData: Prisma.party_assocCreateInput) {
    return this.prisma.party_assoc.create({
      data: newUserData,
    });
  }
  
  // Update Associaton
  @Mutation((returns) => PartyAssoc)
  async updatePartyAssoc(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('assoc_type', { type: () => String }) assoc_type?: string,
    @Args('data', { type: () => PartyAssocInput }) newData?: PartyAssocModel,) {
    return this.prisma.party_assoc.update(
      {
        where: {
          party_ref_assoc_type: {
            party_ref: party_ref,
            assoc_type: assoc_type,
          },
        },
        data: newData,

      });
  }

  // Delete Association  
  @Mutation((returns) => PartyAssoc)
  async deletePartyAssoc(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('assoc_type', { type: () => String }) assoc_type?: string,){
    return this.prisma.party_assoc.delete(
      {
        where: {
          party_ref_assoc_type: {
            party_ref: party_ref,
            assoc_type: assoc_type,
          },
        },
      });
    }
}

