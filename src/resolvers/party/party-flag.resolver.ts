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

  // Delete
  @Mutation((returns) => PartyFlag)
  async deletePartyFlag(
    @Args('party_ref',{ type: () => String }) ref?: string, 
    @Args('party_type',{ type: () => Number }) type?: number,)
  { 
    return this.prisma.party_flag.delete({
      where : { 
        party_ref_flag_type: {
          party_ref: ref,
          flag_type: type,
        }       
      }
    });
  }

  // Update
  @Mutation((returns) => PartyFlag)
  async updatePartyInstr(
    @Args('party_ref',{ type: () => String }) ref?: string, 
    @Args('party_type',{ type: () => Number }) type?: number,
    @Args('data', { type: () => PartyFlagInput }) newData?: PartyFlagModel,)
    {
    return this.prisma.party_flag.update({
        where: {
          party_ref_flag_type: {
            party_ref: ref,
            flag_type: type,
          }       
        },
        data: newData
      });
  }
}

