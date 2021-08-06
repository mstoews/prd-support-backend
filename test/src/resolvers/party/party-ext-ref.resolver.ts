import { PrismaService } from './../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { PartyExtRef } from '../../models/party.model';
import { party_ext_ref as PartyExtRefModel, Prisma } from '@prisma/client';
import { PartyInstrInput, PartyExtRefInput } from 'src/models/inputs/party.input';


  @Resolver('PartyExtRef')
  export class PartyExtRefResolver {
    
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [PartyExtRef])
  party_ext_ref() { 
      return this.prisma.party_ext_ref.findMany();
  } 

  @Query((returns) => [PartyExtRef])
  partyExtRef() { 
      return this.prisma.party_ext_ref.findMany();
  } 

  
  @Query((returns) => [PartyExtRef])
  async party_ext_refByRef( 
  @Args('party_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.party_ext_ref.findMany({ where: {
       party_ref : ref,
      },              
    });
  }
  
  @Query((returns) => [PartyExtRef])
  async partyExtRefByRef( 
  @Args('party_ref',{ nullable: false}) ref?: string) 
  {
     return this.prisma.party_ext_ref.findMany({ where: {
       party_ref : ref,
      },              
    });
  }
  

  /*
  @Mutation((returns) => PartyExtRef)
  async createPartyExtReference(
    @Body() partyClassData: { 
        party_ref : string 
    },
  ): Promise<PartyExtRefModel> {
    const { party_ref } = partyClassData;
    return this.createOnePartyExtRef({
      party_ref,
    });
  }

  */


 @Mutation((returns) => PartyExtRef)
 async createPartyInstrumentInput(@Args('data', { type: () => PartyExtRefInput })  newPartyExtData: Prisma.party_ext_refCreateInput) {
   return this.prisma.party_ext_ref.create({
     data: newPartyExtData,
   });
 }

  
  @Mutation((returns) => PartyExtRef)
  async updateParty(params: {
    where: Prisma.party_ext_refWhereUniqueInput;
    data: Prisma.party_ext_refUpdateInput;
  }): Promise<PartyExtRefModel> {
    const { data, where } = params;
    return this.prisma.party_ext_ref.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyExtRef)
  async deleteParty(where: Prisma.party_ext_refWhereUniqueInput): Promise<PartyExtRefModel> {
    return this.prisma.party_ext_ref.delete({
      where,
    });
  }
}


