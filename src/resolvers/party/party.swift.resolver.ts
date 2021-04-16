import { PrismaService } from './../../services/prisma.service';
import { Logger } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PartySwift } from '../../models/party.model';
import { PartySwiftInput } from '../../models/inputs/party.input';

@Resolver((of) => PartySwift)
export class PartySwiftResolver {
  private readonly logger = new Logger('PartySwiftResolver');

  constructor(
      private prisma: PrismaService ) { }

  @Query((returns) => [PartySwift])
  async partySwiftByRef(@Args('party_ref', { type: () => String }) partyRef: string) {
    console.log(" Query " + partyRef);
    return this.prisma.party_swift_router.findMany({
      where : {
          party_ref: partyRef,
      },
    });
  }

  // Delete
  @Mutation((returns) => PartySwift)
  async deletePartySwiftByRef(
    @Args('party_ref', { type: () => String }) partyRef?: string, ) {
      console.log(" Delete " + partyRef);
      return this.prisma.party_swift_router.delete({
      where: {
        party_ref: partyRef,
      },
    });
  }

  // Update
  @Mutation((returns) => PartySwift)
  async updatePartySwift(
    @Args('party_ref',{ type: () => String }) partyRef?: string, 
    @Args('data',{ nullable: false}) input?: PartySwiftInput,) {
      console.log(" Update " + input);
    return this.prisma.party_swift_router.update({
      data: input,
      where: {
        party_ref: partyRef,
      }
    });
  }

  // Create
  @Mutation((returns) => PartySwift)
  async createPartySwift(
    @Args('data',{ nullable: false}) input?: PartySwiftInput,) {
      console.log(" Create " + input);
      return this.prisma.party_swift_router.create({
      data: input,
    });
  }

}
