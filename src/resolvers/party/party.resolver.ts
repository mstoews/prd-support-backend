/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InternalServerErrorException, Logger, UnprocessableEntityException } from '@nestjs/common';
import { Resolver, Query, Parent, Args, Mutation, Subscription, ResolveField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { ClassAssocInput, NettingInput, PartyAddressInput, 
  PartyAssocInput, PartyClassInput, PartyDateInput, 
  PartyExtRefInput, PartyFlagInput, PartyInput, 
  PartyInstrInput, PartyNarrativeInput, PartySSIInput, PartyTemplateInput } from '../../models/inputs/party.input';
import { HttpPostService } from '../../services/http-post/http-post.service';
import { PrismaService } from './../../services/prisma.service';

import {
  Party,
  PartyExtRef,
  PartyAddress,
  PartyAssoc,
  PartyDate,
  PartyClassification,
  PartyFlag,
  PartyInstr,
  PartyNarrative,
  PartySSI,
  PartySwift,
  PartyAudit,

} from 'src/models/party.model';


@Resolver((of) => Party)
export class PartyResolver {
  private readonly logger = new Logger('PartyResolver');
  constructor(
    private prisma: PrismaService,
    private postService: HttpPostService
  ) { }
 
  @ResolveField('PartySwift', returns => [PartySwift])
  async getPartySwift(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_swift_router.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('PartySSI', returns => [PartySSI])
  async getPartySSI(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_ssi.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('PartyNarrative', returns => [PartyNarrative])
  async getPartyNarrative(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_narrative.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('PartyInstr', returns => [PartyInstr])
  async getPartyInstr(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_instr.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('PartyFlag', returns => [PartyFlag])
  async getPartyFlag(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_flag.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('PartyClassification', returns => [PartyClassification])
  async getPartyClassification(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_classification.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('PartyDate', returns => [PartyDate])
  async getPartyDate(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_date.findMany({ where: { party_ref: party_ref } });
  }


  @ResolveField('PartyAssoc', returns => [PartyAssoc])
  async getPartyAssoc(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_assoc.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('ExtRef', returns => [PartyExtRef])
  async getStatus(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_ext_ref.findMany({ where: { party_ref: party_ref } });
  }

  @ResolveField('PartyAddress', returns => [PartyAddress])
  async getPartyAddress(@Parent() party: Party) {
    const { party_ref } = party;
    return this.prisma.party_addr.findMany({ where: { party_ref: party_ref } });
  }


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
    return this.prisma.party.findUnique({ where: { party_ref: ref } })
    // .party_ext_ref({where: {party_ref: ref } });

  }

  @Query(returns => Party)
  async firstPartyType() {
    return this.prisma.party.findFirst();
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
    @Args('party_type', { type: () => String }) pt: string) {
    return this.prisma.party.findFirst({
      where: {
        party_type: pt,
      },
    });
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
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('data', { nullable: false }) data?: PartyInput,) {
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
    this.pubSub.publish('partyAdded', { partyAdded: newParty });
    return newParty;
  }

  @Mutation((returns) => Party)
  async createParty(@Args('data', { type: () => PartyInput }) partyData: Prisma.partyCreateInput) {
    this.logger.log(`Creating party : ${partyData.party_ref}`);
    try {
      const party = await this.prisma.party.create({
        data: partyData,
      });
      this.logger.log(`Created party : ${partyData.party_ref}`);
      return party;
    }
    catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          this.logger.error(
            `There is a unique constraint violation, a new party cannot be created with this party ${partyData.party_ref}`
          );
          throw new UnprocessableEntityException(`Party already exists with this partyref: ${partyData.party_ref}.Please select a different reference`);
        }
      }
      throw new InternalServerErrorException(e);
    }
  }

  @Mutation((returns) => Party)
  async deletePartyTree(@Args('party_ref', { type: () => String }) party_ref?: string,) {

    const oldParty = await this.prisma.party.findUnique({
      where: {
        party_ref: party_ref,
      },
    });

    await this.prisma.party.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_ext_ref.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_classification.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_flag.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_assoc.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_instr.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_narrative.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_ssi.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_date.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_addr.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.party_template.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.class_assoc.deleteMany({ where: { party_ref: party_ref } })
    await this.prisma.gloss_netting.deleteMany({ where: { party_ref: party_ref } })

    return oldParty;
  }

  @Mutation((returns) => Party)
  async cloneParty(
    @Args('old_party_ref', { type: () => String }) old_party_ref?: string,
    @Args('new_party_ref', { type: () => String }) new_party_ref?: string) {

    await this.deletePartyTree(new_party_ref);

    const oldParty = await this.prisma.party.findUnique({
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
    // Date 
    await this.copyDate(old_party_ref, new_party_ref);
    // Address 
    await this.copyAddress(old_party_ref, new_party_ref);
    // Class Assoc
    await this.copyClassAssoc(old_party_ref, new_party_ref);
    // return the original party updated to a new party
    return await this.prisma.party.findUnique({
      where: {
        party_ref: new_party_ref,
      },
    });

  }


  private async copyParty(old_party_ref: string, new_party_ref: string) {
    // let oldPartyRef: Prisma.partyCreateInput;
    const oldPartyRef = await this.prisma.party.findUnique({
      where: {
        party_ref: old_party_ref,
      },
    });
    const newPartyRef = oldPartyRef;
    newPartyRef.party_ref = new_party_ref;
    await this.prisma.party.create({ data: newPartyRef });
  }

  private async copyExtRef(old_party_ref: string, new_party_ref: string) {
    // const oldExtRef: any[];

    const oldExtRef = await this.prisma.party_ext_ref.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });


    oldExtRef.forEach(async (ext_ref: Prisma.party_ext_refCreateInput) => {
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

  private async copyDate(old_party_ref: string, new_party_ref: string) {
    let oldDate: any[];
    oldDate = await this.prisma.party_date.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    oldDate.forEach(async (olddate: PartyDateInput) => {
      olddate.party_ref = new_party_ref;
      await this.prisma.party_date.create({ data: olddate });
    });
  }

  private async copyAddress(old_party_ref: string, new_party_ref: string) {
    let oldAddress: any[];
    oldAddress = await this.prisma.party_addr.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    oldAddress.forEach(async (address: PartyAddressInput) => {
      address.party_ref = new_party_ref;
      await this.prisma.party_addr.create({ data: address });
    });
  }

  private async copyClassAssoc(old_party_ref: string, new_party_ref: string) {
    let oldClassAssocData: any[];
    oldClassAssocData = await this.prisma.class_assoc.findMany({
      where: {
        party_ref: old_party_ref,
      },
    });

    oldClassAssocData.forEach(async (classAssocData: ClassAssocInput) => {
      classAssocData.code_1 = new_party_ref;
      classAssocData.party_ref = new_party_ref;
      await this.prisma.class_assoc.create({ data: classAssocData });
    });
  }

  @Mutation((returns) => Party)
  async createPartyGlossXML(
    @Args('party_ref', { type: () => String }) party_ref: string,
    @Args('environment', { type: () => String }) environment: string) {
    const oldParty = await this.prisma.party.findUnique({
      where: {
        party_ref: party_ref,
      },
    });
    const partyTemplate = await this.prisma.party_template.findMany({
      where: {
        party_ref: party_ref,
      },
    });
    const classAssocData = await this.prisma.class_assoc.findMany({
      where: {
        party_ref: party_ref,
      },
    });
    this.logger.log('createPartyGlossXLM : ', party_ref);

    if (oldParty.party_type === "COMP") {
      this.logger.log(partyTemplate);
      if (partyTemplate.length != 0) {
        await this.prisma.party_data_pushed.upsert({
          where: {
            party_ref_environment: {
              party_ref: party_ref,
              environment: environment,
            }
          },
          update: {
            party_template_data: JSON.stringify(partyTemplate[0]),
            version_date: new Date()
          },
          create: {
            party_ref: party_ref,
            environment: environment,
            party_template_data: JSON.stringify(partyTemplate[0]),
            party_class_assoc_data: '',
            party_netting_data: '',
            version_date: new Date(),
            version_user: 'ADMIN',
          },
        });
        await this.postService.updateGlossNonXMLByPartyRef(partyTemplate[0], 'T');
        await this.postService.updateGlossNonXMLByPartyRef(partyTemplate[0], 'C');
      }
      await this.prisma.party_data_pushed.upsert({
        where: {
          party_ref_environment: {
            party_ref: party_ref,
            environment: environment,
          }
        },
        update: {
          party_class_assoc_data: JSON.stringify(classAssocData),
          version_date: new Date()
        },
        create: {
          party_ref: party_ref,
          environment: environment,
          party_template_data: '',
          party_class_assoc_data: JSON.stringify(classAssocData),
          party_netting_data: '',
          version_date: new Date(),
          version_user: 'ADMIN',
        },
      });
      await this.postService.updateClassAssocStatic(classAssocData);
    }
    await this.postService.updateGlossXMLByPartyRef(party_ref);

    return oldParty;
  }

  @Mutation((returns) => Party)
  async createPartySSIGlossXML(@Args('party_ref', { type: () => String }) party_ref: string) {
    const party_ssi = await this.prisma.party_ssi.findMany({
      where: {
        party_ref: party_ref,
      },
    });
    await this.postService.updatePartySSIByPartyRef(party_ref);
    return party_ssi;
  }

  // Party Audit

  @Query((returns) => [PartyAudit])
  async partyAuditByRef(
    @Args('party_ref', { nullable: false }) ref?: string) {
    return this.prisma.party_audit.findMany({
      where: {
        party_ref: ref,
      },
    });
  }

  @Mutation((returns) => PartyAudit)
  async backUpPartyData(@Args('party_ref', { type: () => String }) party_ref?: string,) {

    const party = await this.prisma.party.findUnique({
      where: {
        party_ref: party_ref,
      },
    });

    const partyExtRef = await this.prisma.party_ext_ref.findMany({
      where: { party_ref: party_ref, },
    });

    const partyClassification = await this.prisma.party_classification.findMany({
      where: { party_ref: party_ref, },
    });

    const partyFlag = await this.prisma.party_flag.findMany({
      where: { party_ref: party_ref, },
    });

    const partyAssociation = await this.prisma.party_assoc.findMany({
      where: { party_ref: party_ref, },
    });

    const partyNarr = await this.prisma.party_narrative.findMany({
      where: { party_ref: party_ref, },
    });

    const partyInstr = await this.prisma.party_instr.findMany({
      where: { party_ref: party_ref, },
    });

    const partySSI = await this.prisma.party_ssi.findMany({
      where: { party_ref: party_ref, },
    });

    const partyDate = await this.prisma.party_date.findMany({
      where: { party_ref: party_ref, },
    });

    const partyAddress = await this.prisma.party_addr.findMany({
      where: { party_ref: party_ref, },
    });

    const partyTemplate = await this.prisma.party_template.findMany({
      where: { party_ref: party_ref, },
    });

    const classAssocData = await this.prisma.class_assoc.findMany({
      where: { party_ref: party_ref, },
    });

    const nettingData = await this.prisma.gloss_netting.findMany({
      where: { party_ref: party_ref, },
    });

    let maxVersionNo = 0;
    const maxVersionData = await this.prisma.party_audit.aggregate({
      max: {
        version_no: true,
      },
      where: { party_ref: party_ref, },
    });

    maxVersionNo = maxVersionData.max.version_no;

    const versionNo = maxVersionNo + 1;

    const partyData: PartyAudit = new PartyAudit;


    partyData.party_ref = party.party_ref;
    partyData.party_data = JSON.stringify(party);
    partyData.party_ext_ref_data = JSON.stringify(partyExtRef);
    partyData.party_classification_data = JSON.stringify(partyClassification);
    partyData.party_flag_data = JSON.stringify(partyFlag);
    partyData.party_narrative_data = JSON.stringify(partyNarr);
    partyData.party_assoc_data = JSON.stringify(partyAssociation);
    partyData.party_instr_data = JSON.stringify(partyInstr);
    partyData.party_ssi_data = JSON.stringify(partySSI);
    partyData.party_date_data = JSON.stringify(partyDate);
    partyData.party_address_data = JSON.stringify(partyAddress);
    partyData.party_template_data = JSON.stringify(partyTemplate);
    partyData.party_class_assoc_data = JSON.stringify(classAssocData);
    partyData.party_netting_data = JSON.stringify(nettingData);
    partyData.version_date = new Date();
    partyData.version_no = versionNo;
    partyData.version_user = party.version_user;

    return this.prisma.party_audit.create({
      data: partyData,
    });

  }

  @Mutation((returns) => PartyAudit)
  async restorePartyData(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('version_no', { type: () => Number }) version_no?: number,) {

    const party = await this.prisma.party_audit.findUnique({
      where: {
        party_ref_version_no: {
          party_ref: party_ref,
          version_no: version_no,
        },
      },
    });

    await this.deletePartyTree(party_ref);

    let extReferenceData: any[];
    let classificationData: any[];
    let flagData: any[];
    let narrativeData: any[];
    let associationData: any[];
    let instrumentData: any[];
    let ssiData: any[];
    let dateData: any[];
    let addressData: any[];
    let templateData: any[];
    let classAssocData: any[];
    let nettingData: any[];

    extReferenceData = JSON.parse(party.party_ext_ref_data);
    extReferenceData.forEach(async (extReference: PartyExtRefInput) => {
      await this.prisma.party_ext_ref.create({ data: extReference });
    });

    classificationData = JSON.parse(party.party_classification_data);
    classificationData.forEach(async (classification: PartyClassInput) => {
      await this.prisma.party_classification.create({ data: classification });
    });

    flagData = JSON.parse(party.party_flag_data);
    flagData.forEach(async (flag: PartyFlagInput) => {
      await this.prisma.party_flag.create({ data: flag });
    });

    narrativeData = JSON.parse(party.party_narrative_data);
    narrativeData.forEach(async (narrative: PartyNarrativeInput) => {
      await this.prisma.party_narrative.create({ data: narrative });
    });

    associationData = JSON.parse(party.party_assoc_data);
    associationData.forEach(async (association: PartyAssocInput) => {
      await this.prisma.party_assoc.create({ data: association });
    });

    instrumentData = JSON.parse(party.party_instr_data);
    instrumentData.forEach(async (instrument: PartyInstrInput) => {
      instrument.party_ref = party_ref;
      await this.prisma.party_instr.create({ data: instrument });
    });

    ssiData = JSON.parse(party.party_ssi_data);
    ssiData.forEach(async (ssi: PartySSIInput) => {
      await this.prisma.party_ssi.create({ data: ssi });
    });

    dateData = JSON.parse(party.party_date_data);
    dateData.forEach(async (date: PartyDateInput) => {
      await this.prisma.party_date.create({ data: date });
    });

    addressData = JSON.parse(party.party_address_data);
    addressData.forEach(async (address: PartyAddressInput) => {
      await this.prisma.party_addr.create({ data: address });
    });

    templateData = JSON.parse(party.party_template_data);
    templateData.forEach(async (template: PartyTemplateInput) => {
      await this.prisma.party_template.create({ data: template });
    });

    classAssocData = JSON.parse(party.party_class_assoc_data);
    classAssocData.forEach(async (classAssoc: ClassAssocInput) => {
      await this.prisma.class_assoc.create({ data: classAssoc });
    });

    nettingData = JSON.parse(party.party_netting_data);
    nettingData.forEach(async (netting: NettingInput) => {
      await this.prisma.gloss_netting.create({ data: netting });
    });

    return await this.prisma.party.create({ data: JSON.parse(party.party_data) });

  }

}
