import { PrismaService } from '../../services/prisma.service';
import { Logger } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PartyAddress } from 'src/models/party.model';
import { PartyAddressInput } from 'src/models/inputs/party.input';

@Resolver((of) => PartyAddress)
export class PartyAddressResolver {
  private readonly logger = new Logger('PartyAddressResolver');

  constructor(
    private prisma: PrismaService) { }

  @Query((returns) => [PartyAddress])
  async partyAddressByRef(
    @Args('party_ref', { nullable: false }) party_ref: string,) {
    console.log(" Query " + party_ref);
    return this.prisma.party_addr.findMany({
      where: {
        party_ref: party_ref,
      },
    });
  }

  // Create
  @Mutation((returns) => PartyAddress)
  async createPartyAddress(
    @Args('data', { nullable: false }) data?: PartyAddressInput,) {
    console.log(" Create " + data);
    return this.prisma.party_addr.create({
      data: data,
    });
  }

  // Update
  @Mutation((returns) => PartyAddress)
  async updatePartyAddress(
    @Args('party_ref', { nullable: false }) party_ref?: string,
    @Args('addr_type', { nullable: false }) addr_type?: string,
    @Args('data', { nullable: false }) data?: PartyAddressInput,) {
    console.log(" Update " + data);
    return this.prisma.party_addr.update({
      data: data,
      where: {
        party_ref_addr_type: {
          party_ref: party_ref,
          addr_type: addr_type,
        },
      }
    });
  }

  // Delete
  @Mutation((returns) => PartyAddress)
  async deletePartyAddressByRef(
    @Args('party_ref', { nullable: false }) party_ref?: string,
    @Args('addr_type', { nullable: false }) addr_type?: string,) {
    console.log(" Delete " + party_ref);
    return this.prisma.party_addr.delete({
      where: {
        party_ref_addr_type: {
          party_ref: party_ref,
          addr_type: addr_type,
        },
      }
    });
  }

}
