import { Logger } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { HttpPostService } from 'src/services/http-post/http-post.service';
import { PartySwift } from 'src/models/party.model';
import { PartySwiftInput } from 'src/models/inputs/party.input';
import { PrismaService } from 'src/services/prisma.service';

@Resolver((of) => PartySwift)
export class PartySwiftResolver {
  private readonly logger = new Logger('PartySwiftResolver');

  constructor(
    private prisma: PrismaService,
    private postService: HttpPostService
  ) { }

  @Query((returns) => [PartySwift])
  async partySwiftByRef(@Args('party_ref', { type: () => String }) partyRef: string) {
    console.log(" Query " + partyRef);
    return this.prisma.party_swift_router.findMany({
      where: {
        party_ref: partyRef,
      },
    });
  }

  // Delete
  @Mutation((returns) => PartySwift)
  async deletePartySwiftByRef(
    @Args('party_ref', { type: () => String }) partyRef?: string,) {
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
    @Args('party_ref', { type: () => String }) partyRef?: string,
    @Args('data', { nullable: false }) input?: PartySwiftInput,) {
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
    @Args('data', { nullable: false }) input?: PartySwiftInput,) {
    console.log(" Create " + input);
    return this.prisma.party_swift_router.create({
      data: input,
    });
  }

  @Mutation((returns) => PartySwift)
  async cloneSwiftParty(
    @Args('old_party_ref', { type: () => String }) old_party_ref?: string,
    @Args('new_party_ref', { type: () => String }) new_party_ref?: string) {

    let oldPartyRef: any;
    oldPartyRef = await this.prisma.party_swift_router.findUnique({
      where: {
        party_ref: old_party_ref,
      },
    });

    let newPartyRef = oldPartyRef;
    newPartyRef.party_ref = new_party_ref;
    await this.prisma.party_swift_router.create({ data: newPartyRef });
    return oldPartyRef;
  }

  @Mutation((returns) => PartySwift)
  async sendSwiftStaticToGloss(@Args('party_ref', { type: () => String }) party_ref: string) {
    let swiftData = await this.prisma.party_swift_router.findUnique({
      where: {
        party_ref: party_ref,
      },
    });
    this.postService.updateSwiftStatic(swiftData); {
      return swiftData;
    }
  }

}
