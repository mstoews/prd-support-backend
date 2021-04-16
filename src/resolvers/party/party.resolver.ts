import { PrismaService } from './../../services/prisma.service';
import { Logger } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import { PubSub} from 'graphql-subscriptions';
import { Party, PartySwift } from '../../models/party.model';
import { PartyInput } from '../../models/inputs/party.input';
import { HttpPostService } from '../../services/http-post/http-post.service';

import {
  Prisma,
  party as PartyModel,
} from '@prisma/client';

@Resolver((of) => Party)
export class PartyResolver {
  private readonly logger = new Logger('PartyResolver');
  constructor(
    private prisma: PrismaService, private postService: HttpPostService
  ) { }

  pubSub = new PubSub();

  @Subscription((returns) => Party)
  partyChanged() {
      return this.pubSub.asyncIterator('partyChanged')
  }

  @Query((returns) => [Party])
  async party() {
    this.logger.log('prisma.party => FindMany');
    return this.prisma.party.findMany();
  }

  @Query((returns) => Party)
  async firstPartyByType(@Args('party_type', { type: () => String }) pt: string) {
    this.logger.log('partyByType', pt);
    return this.prisma.party.findFirst({
      where: {
        party_type: pt,
      },
    });
  }

  @Query((returns) => Party)
  async PartyTreeByRef(@Args('party_ref', { type: () => String }) ref: string) {
    this.logger.log('PartyTreeByRef', ref);
    // let party: Party;
    return this.prisma.party.findUnique({where: {party_ref: ref } })
    // .party_ext_ref({where: {party_ref: ref } });

  }

  @Query(returns => Party)
  async firstPartyType() {
    return this.prisma.party.findFirst();
  }

  @Query(returns => Party)
  async partyByRefNo(@Args('ref', { type: () => String }) ref: string) {
    return this.prisma.party.findUnique({
      where: {
        party_ref: ref,
      },
    });
  }

  @Query((returns) => [Party])
  async partyByType(@Args('party_type', { type: () => String }) pt: string) {
    this.logger.log('partyByType', pt);
    return this.prisma.party.findMany({
      where: {
        party_type: pt,
      },
    });
  }

  @Query((returns) => Party)
  async partyByRef(@Args('party_ref', { type: () => String }) ref: string) {
    return this.prisma.party.findUnique({
      where: {
        party_ref: ref,
      },
    });
  }
  
  @Query((returns) => Party)
  async getFirstPartyByType(
    @Args('party_type', { type: () => String }) pt: string){
    return this.prisma.party.findFirst({
          where: {
        party_type: pt,
      },
    });
  }

  @Mutation((returns) => Party)
  async createPartyGlossXML(@Args('party_ref', { type: () => String }) party_ref: string) {
    let oldParty = await this.prisma.party.findUnique({
      where: {
        party_ref: party_ref,
      },
    });
    let partyTemplate = await this.prisma.template_party.findUnique({
      where: {
        party_ref: party_ref,
      },
    });
    this.logger.log('createPartyGlossXLM : ', party_ref);
      this.postService.updateGlossByPartyRef(party_ref,partyTemplate);{
      return oldParty;  
    }
  }
  // Delete
  @Mutation((returns) => Party)
  async deletePartyByRef(@Args('party_ref', { type: () => String }) ref: string) {
    this.logger.log('deletePartyByRef : ', ref);
    return this.prisma.party.delete({
      where: {
        party_ref: ref,
      },
    });
  }

  // Update
  @Mutation((returns) => Party)
  async updatePartyByRef(
    @Args('party_ref',{ type: () => String }) party_ref?: string, 
    @Args('data',{ nullable: false}) data?: PartyInput,) 
  {
    this.logger.log('updatePartyByRef', data.party_ref);
    return this.prisma.party.update({
      data: data,
      where: {
        party_ref: party_ref,
      }
    });
  }

  // Create 
  @Mutation((returns) => Party)
  async createPartyInput(@Args('data', { type: () => PartyInput }) newUserData: Prisma.partyCreateInput) {
    const newParty = this.prisma.party.create({
      data: newUserData,
    });
    this.pubSub.publish('partyAdded', { partyAdded: newParty});
    return newParty;
  }

  @Mutation((returns) => Party)
  async createParty(@Args('data', { type: () => PartyInput }) newUserData: Prisma.partyCreateInput) {
    return this.prisma.party.create({
      data: newUserData,
    });
  }
  
  @Mutation((returns) => Party)
  async deletePartyTree(@Args('party_ref',{ type: () => String }) party_ref?: string,)
  {
    
      let oldParty = await this.prisma.party.findUnique({
        where: {
          party_ref: party_ref,
        },  
      });
      
      await this.prisma.party.deleteMany({ where: {party_ref : party_ref }})
      await this.prisma.party_ext_ref.deleteMany({ where: {party_ref : party_ref }})
      await this.prisma.party_classification.deleteMany({ where: {party_ref : party_ref }})
      await this.prisma.party_flag.deleteMany({ where: {party_ref : party_ref }})
      await this.prisma.party_assoc.deleteMany({ where: {party_ref : party_ref }})
      await this.prisma.party_instr.deleteMany({ where: {party_ref : party_ref }})
      await this.prisma.party_narrative.deleteMany({ where: {party_ref : party_ref }})
      await this.prisma.party_ssi.deleteMany({ where: {party_ref : party_ref }})

      return oldParty;
  }

  @Mutation((returns) => Party)
  async cloneParty(
    @Args('old_party_ref',{ type: () => String }) old_party_ref?: string,
    @Args('new_party_ref',{ type: () => String }) new_party_ref?: string)
  { 

    await this.deletePartyTree(new_party_ref);

    let oldParty = await this.prisma.party.findUnique({
      where: {
        party_ref: old_party_ref,
      },
    });

    await this.copyParty(old_party_ref, new_party_ref);
    // ExtRef
    await this.copyExtRef(old_party_ref, new_party_ref);             
    // Classifications
    await this.copyClassification(old_party_ref, new_party_ref);
    // Flags
    await this.copyFlag(old_party_ref, new_party_ref);
    // Association 
    await this.copyAssoc(old_party_ref, new_party_ref);
    // Instuments
    await this.copyInstructments(old_party_ref, new_party_ref);
    // Narrative 
    await this.copyNarrative(old_party_ref, new_party_ref);
    // SSI 
    await this.copySSI(old_party_ref, new_party_ref);
    // return the original party updated to a new party
    return oldParty;
    
  } 


  private async copyParty(old_party_ref: string, new_party_ref: string) {
    let oldPartyRef : Prisma.partyCreateInput;
    oldPartyRef = await this.prisma.party.findUnique({
      where: {
        party_ref: old_party_ref,
      },
    });
    let newPartyRef = oldPartyRef;
    newPartyRef.party_ref = new_party_ref;
    await this.prisma.party.create({ data: newPartyRef });
  }

  private async copyExtRef(old_party_ref: string, new_party_ref: string) {
    let oldExtRef: any[];

    oldExtRef = await this.prisma.party_ext_ref.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });


    oldExtRef.forEach(async (ext_ref:  Prisma.party_ext_refCreateInput) => {
      ext_ref.party_ref = new_party_ref;
      await this.prisma.party_ext_ref.create({ data: ext_ref });
    });
  }

  private async copyClassification(old_party_ref: string, new_party_ref: string) {
    let oldPartyClassification: any[];

    oldPartyClassification = await this.prisma.party_classification.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    oldPartyClassification.forEach(async (classification: Prisma.party_classificationCreateInput) => {
      classification.party_ref = new_party_ref;
      await this.prisma.party_classification.create({ data: classification });
    });
  }

  private async copyFlag(old_party_ref: string, new_party_ref: string) {
    let oldFlag: any[];
    oldFlag = await this.prisma.party_flag.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });
  
    oldFlag.forEach(async (flag: Prisma.party_flagCreateInput) => {
      flag.party_ref = new_party_ref;
      await this.prisma.party_flag.create({ data: flag });
    });
  }

  private async copyAssoc(old_party_ref: string, new_party_ref: string) {
    let oldAssociation: any[];
    oldAssociation = await this.prisma.party_assoc.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    oldAssociation.forEach(async (assoc: Prisma.party_assocCreateInput) => {
      assoc.party_ref = new_party_ref;
      await this.prisma.party_assoc.create({ data: assoc });
    });
  }

  private async copySSI(old_party_ref: string, new_party_ref: string) {
    let oldSSI: any[];
    oldSSI = await this.prisma.party_ssi.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    oldSSI.forEach(async (ssi: Prisma.party_ssiCreateInput) => {
      ssi.party_ref = new_party_ref;
      await this.prisma.party_ssi.create({ data: ssi });
    });
  }

  private async copyNarrative(old_party_ref: string, new_party_ref: string) {
    let oldNarr: any[];
    oldNarr = await this.prisma.party_narrative.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    oldNarr.forEach(async (narrative: Prisma.party_narrativeCreateInput) => {
      narrative.party_ref = new_party_ref;
      await this.prisma.party_narrative.create({ data: narrative });
    });
  }

  private async copyInstructments(old_party_ref: string, new_party_ref: string) {
    let oldInstr: any[];
    oldInstr = await this.prisma.party_instr.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    type inStr = Prisma.party_instrCreateInput;

    oldInstr.forEach(async (instrUpdate: inStr) => {
      instrUpdate.party_ref = new_party_ref;
      await this.prisma.party_instr.create({ data: instrUpdate });
    });
  }

  @Mutation((returns) => PartySwift)
  async sendSwiftStaticToGloss(@Args('party_ref', { type: () => String }) party_ref: string) {
    let swiftData = await this.prisma.party_swift_router.findUnique({
      where: {
        party_ref: party_ref,
      },
    });
    this.logger.log('sendSwiftStaticToGloss : ', party_ref);
      this.postService.updateGlossSwiftRouter(swiftData);{
      return swiftData;  
    }
  }

}
