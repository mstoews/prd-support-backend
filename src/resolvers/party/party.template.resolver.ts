import { PrismaService } from '../../services/prisma.service';
import { Logger } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PartyTemplate } from 'src/models/party.model';
import { PartyTemplateInput } from 'src/models/inputs/party.input';

@Resolver((of) => PartyTemplate)
export class PartyTemplateResolver {
  private readonly logger = new Logger('PartyTemplateResolver');

  constructor(
    private prisma: PrismaService) { }

  @Query(returns => [PartyTemplate])
  async partyTemplateByRef(
    @Args('party_ref', { type: () => String }) party_ref: string) {
    console.log(" Query " + party_ref);
    return this.prisma.template_party.findMany({
      where: {
        party_ref: party_ref,
      },
    });
  }

  // Create
  @Mutation(returns => PartyTemplate)
  async createPartyTemplate(
    @Args('data', { nullable: false }) input?: PartyTemplateInput,) {
    console.log(" Create " + input);
    return this.prisma.template_party.create({
      data: input,
    });
  }

  // Update
  @Mutation(returns => PartyTemplate)
  async updatePartyTemplate(
    @Args({ name: 'party_ref', type: () => String }) party_ref: string,
    @Args({ name: 'data',  nullable: false }) input: PartyTemplateInput,) {
    console.log(" Update " + input);
    return this.prisma.template_party.update({
      data: input,
      where: {
        party_ref: party_ref,
      }
    });
  }

  // Delete
  @Mutation(returns => PartyTemplate)
  async deletePartyTemplateByRef(
    @Args('party_ref', { type: () => String }) party_ref?: string,) {
    console.log(" Delete " + party_ref);
    return this.prisma.template_party.delete({
      where: {
        party_ref: party_ref,
      },
    });
  }

}
