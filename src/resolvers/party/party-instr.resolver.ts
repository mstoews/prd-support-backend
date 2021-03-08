import { PrismaService } from './../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { PartyInstr } from '../../models/party.model';
import { PartyInstrInput} from '../../models/inputs/party.input';

import {
    party_instr as PartyInstrModel,
    Prisma,
  } from '@prisma/client';
import { type } from 'os';

// type instrCreateInput = Prisma.party_instrCreateInput;

  @Resolver('PartyInstr')
  export class PartyInstrResolver {
  
  constructor(private prisma: PrismaService) {}
  
  @Query((returns) => [PartyInstr])
    party_instr() { 
        return this.prisma.party_instr.findMany();
    }  

  @Query((returns) => [PartyInstr])
    partyInstr() { 
        return this.prisma.party_instr.findMany();
    }  

  @Query((returns) => [PartyInstr])
    async partyInstrByRef( 
    @Args('party_ref',{ nullable: false}) ref?: string) 
    {
       return this.prisma.party_instr.findMany({ where: {
         party_ref : ref,
        },              
      });
    }
  
  // Create  
  @Mutation((returns) => PartyInstr)
    async createPartyInstrument(@Args('data', { type: () => PartyInstrInput })  newInstrumentData: Prisma.party_instrCreateInput) {
    return this.prisma.party_instr.create({
      data: newInstrumentData,
    });
  }
  
  // Delete
    @Mutation((returns) => PartyInstr)
    async deletePartyInstr(
      @Args('party_ref', { type: () => String }) party?: string,
      @Args('instr_ref', { type: () => String }) instr?: string,) {
      return this.prisma.party_instr.delete(
        {
          where: {
            party_ref_instr_type: {
              party_ref: party,
              instr_type: instr,
            }
          }
        });
    }
  
  
  // Update
  @Mutation((returns) => PartyInstr)
  async updatePartyInstr(
    @Args('party_ref', { type: () => String }) party?: string,
    @Args('instr_ref', { type: () => String }) instr?: string,
    @Args('data', { type: () => PartyInstrInput }) newData?: PartyInstrModel,)
    {
    return this.prisma.party_instr.update({
        where: {
          party_ref_instr_type: {
            party_ref: party,
            instr_type: instr,
          }
        },
        data: newData
      });
  }
}

