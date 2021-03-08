import { PrismaService } from './../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { PartyFlag } from '../../models/party.model';
import { PartyFlagInput} from '../../models/inputs/party.input';

import {
    Prisma,
    party_flag as PartyFlagModel
  } from '@prisma/client';


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
  

  // Creation
  @Mutation((returns) => PartyFlag)
  async createPartyFlag(@Args('data', { type: () => PartyFlagInput }) newData?: Prisma.party_flagCreateInput,) {
    return this.prisma.party_flag.create({
      data: newData
    });
  }

  // Delete
  @Mutation((returns) => PartyFlag)
  async deletePartyFlag(
    @Args('party_ref',{ type: () => String }) ref?: string, 
    @Args('flag_code',{ type: () => String }) code?: string,)
  { 
    return this.prisma.party_flag.delete({
      where : { 
        party_ref_flag_code: {
          party_ref: ref,
          flag_code: code,
        }       
      }
    });
  }

  // Update
  @Mutation((returns) => PartyFlag)
  async updatePartyFlag(
    @Args('party_ref',{ type: () => String }) ref?: string, 
    @Args('flag_code',{ type: () => String }) code?: string,
    @Args('data', { type: () => PartyFlagInput }) newData?: Prisma.party_flagUpdateInput,)
    {
    return this.prisma.party_flag.update({
        where: {
          party_ref_flag_code: {
            party_ref: ref,
            flag_code: code,
          }       
        },
        data: newData
      });
  }
}

