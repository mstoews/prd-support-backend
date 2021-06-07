import { InternalServerErrorException, Logger, UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PartySwiftInput } from 'src/models/inputs/party.input';
import { PartySwift } from 'src/models/party.model';
import { HttpPostService } from 'src/services/http-post/http-post.service';
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
    this.logger.log(`Creating party : ${input.party_ref}`);
    try {
      const party = await this.prisma.party_swift_router.create({
        data: input,
      });
      this.logger.log(`Created party : ${input.party_ref}`);
      return party;
    }
    catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          this.logger.error(
            `There is a unique constraint violation, a new party cannot be created with this party ${input.party_ref}`
          );
          throw new UnprocessableEntityException(`Party already exists with this partyref: ${input.party_ref}.Please select a different reference`);
        }
      }
      throw new InternalServerErrorException(e);
    }
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
