import { PrismaService } from './../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation, Field, ArgsType } from '@nestjs/graphql';
import { PartyExtRef } from '../../models/party.model';
import { party_ext_ref as PartyExtRefModel, 
  Prisma 
} from '@prisma/client';
import { PartyExtRefInput } from 'src/models/inputs/party.input';

@Resolver('PartyExtRef')
export class PartyExtRefResolver {

  constructor(
    private prisma: PrismaService) { }

  @Query((returns) => [PartyExtRef])
  async partyExtRefByRef(
    @Args('party_ref', { nullable: false }) ref?: string) {
    return this.prisma.party_ext_ref.findMany({
      where: {
        party_ref: ref,
      },
    });
  }

  // Create ExtRef
  @Mutation((returns) => PartyExtRef)
  async createExtRefParty(@Args('data', { type: () => PartyExtRefInput }) newUserData: Prisma.party_ext_refCreateInput) {
    console.log('createPartyByRef : ', newUserData);
    return this.prisma.party_ext_ref.create({
      data: newUserData,
    });
  }

  // Update ExtRef party_ext_refWhereUniqueInput
  @Mutation((returns) => PartyExtRef)
  async updatePartyExtRef(
    @Args('party_ref', { nullable: false }) party_ref?: string,
    @Args('party_ext_ref_type', { nullable: false }) party_ext_ref_type?: string,
    @Args('data', { type: () => PartyExtRefInput }) newPartyExtData?: PartyExtRefModel, ) {
    return this.prisma.party_ext_ref.update({
      where: {
          party_ref_party_ext_ref_type: {
          party_ref: party_ref,
          party_ext_ref_type: party_ext_ref_type,
        }
      },
      data: newPartyExtData
    });
  }

  // Delete ExtRef
  @Mutation((returns) => PartyExtRef)
  async deletePartyExtRef(
    @Args('party_ref', { nullable: false }) ref?: string,
    @Args('party_ext_ref_type', { nullable: false }) ref_type?: string,
  ) {
    return this.prisma.party_ext_ref.delete({
      where: {
        party_ref_party_ext_ref_type: {
          party_ref: ref,
          party_ext_ref_type: ref_type,
        }
      },
    });
  }

  @Query((returns) => PartyExtRef)
  async getBicCodeByRef(
    @Args('party_ref', { nullable: false }) ref?: string,) {
    return this.prisma.party_ext_ref.delete({
      where: {
        party_ref_party_ext_ref_type: {
          party_ref: ref,
          party_ext_ref_type: 'BIC',
        }
      },
    });
  }

}



