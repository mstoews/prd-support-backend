import { PrismaService } from './../../services/prisma.service';
import { Logger  } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PartySwift, Party } from '../../models/party.model';
import { PartySwiftInput } from '../../models/inputs/party.input';
import { HttpPostService } from '../../services/http-post/http-post.service';
import { party_swift_router as PS, Prisma } from '@prisma/client';


@Resolver((of) => PartySwift)
export class PartySwiftResolver {
  private readonly logger = new Logger('PartySwiftResolver');
  
  constructor(
      private prisma: PrismaService, 
      private postService: HttpPostService ) { }

  @Query((returns) => [PartySwift])
  async partySwift() {
    this.logger.log('party_swift => findMany');
    return this.prisma.party_swift_router.findMany();
  }
  
  @Query((returns) => [PartySwift])
  async partyswiftByRef(@Args('ref', { type: () => String }) ref: string) {
    return this.prisma.party_swift_router.findMany({
      where: {
        party_ref: ref,
      },
    });
  }

  @Query((returns) => [PartySwift])
  async partySwiftByType(@Args('party_ref', { type: () => String }) pr: string) {
     return this.prisma.party_swift_router.findMany({
      where: {
        party_ref: pr,
      },
    });
  }

  // Delete
  @Mutation((returns) => PartySwift)
  async deletePartySwiftByRef(@Args('party_ref', { type: () => String }) ref: string) {
    this.logger.log('deletePartySwiftByRef : ', ref);
    return this.prisma.party_swift_router.delete({
      where: {
        party_ref: ref,
      },
    });
  }

  // Update
  @Mutation((returns) => PartySwift)
  async updatePartySwiftByRef(
    @Args('party_ref',{ type: () => String }) party_ref?: string, 
    @Args('data',{ nullable: false}) data?: PartySwiftInput) 
  {
    return this.prisma.party_swift_router.update({
      data: data,
      where: {
        party_ref: party_ref,
      }
    });
  }

  // Create
  @Mutation((returns) => PartySwift)
  async createPartySwift(@Args('data', { type: () => PartySwiftInput }) newUserData: Prisma.party_swift_routerCreateInput) {
    return this.prisma.party_swift_router.create({
      data: newUserData,
    });
  }

//   @Query((returns) => [PartySwift])
//   async updateGlossSwiftByRef(@Args('party_ref', { type: () => String }) party_ref: string) {
//     let oldParty = await this.prisma.party.findUnique({
//       where: {
//         party_ref: party_ref,
//       },
//     });
//       this.postService.updateSwiftByPartyRef(party_ref);{
//       return oldParty;  
//     }
//   }
  
}
