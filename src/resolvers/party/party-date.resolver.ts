import { PrismaService } from '../../services/prisma.service';
import { Logger } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PartyDate } from 'src/models/party.model';
import { PartyDateInput } from 'src/models/inputs/party.input';

@Resolver((of) => PartyDate)
export class PartyDateResolver {
  private readonly logger = new Logger('PartyDateResolver');

  constructor(
    private prisma: PrismaService) { }

  @Query((returns) => [PartyDate])
  async partyDateByRef(
    @Args('party_ref', { type: () => String }) party_ref: string) {
    console.log(" Query " + party_ref);
    return this.prisma.party_date.findMany({
      where: {
        party_ref: party_ref,
      },
    });
  }

  // Create
  @Mutation((returns) => PartyDate)
  async createPartyDate(
    @Args('data', { nullable: false }) data?: PartyDateInput,) {
    console.log(" Create " + data);
    return this.prisma.party_date.create({
      data: data,
    });
  }

  // Update
  @Mutation((returns) => PartyDate)
  async updatePartyDate(
    @Args('party_ref', { nullable: false }) party_ref?: string,
    @Args('date_type', { nullable: false }) date_type?: string,
    @Args('data', { nullable: false }) data?: PartyDateInput,) {
    console.log(" Update " + data);
    return this.prisma.party_date.update({
      data: data,
      where: {
        party_ref_date_type :{
          party_ref: party_ref,
          date_type: date_type,
        },
      }
    });
  }

  // Delete
  @Mutation((returns) => PartyDate)
  async deletePartyDateByRef(
    @Args('party_ref', { nullable: false }) party_ref?: string,
    @Args('date_type', { nullable: false }) date_type?: string,) {
    console.log(" Delete " + party_ref);
    return this.prisma.party_date.delete({
      where: {
        party_ref_date_type :{
          party_ref: party_ref,
          date_type: date_type,
        },
      }
    });
  }

}
