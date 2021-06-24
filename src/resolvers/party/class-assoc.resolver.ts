import { Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassAssocInput, ClassAssocSubCodeArrayInput } from 'src/models/inputs/party.input';
import { ClassAssoc } from 'src/models/party.model';
import { HttpPostService } from 'src/services/http-post/http-post.service';
import { PrismaService } from '../../services/prisma.service';


@Resolver('ClassAssoc')
export class ClassAssocResolver {

  private readonly logger = new Logger('ClassAssocResolver');

  constructor(
    private prisma: PrismaService,
    private postService: HttpPostService
  ) { }

  @Query((returns) => [ClassAssoc])
  async partyClassAssocByRef(
    @Args('party_ref', { nullable: false }) party_ref?: string) {
    return await this.prisma.class_assoc.findMany({
      where: {
        party_ref: party_ref,
      },
    });
  }

  // Creation
  @Mutation((returns) => ClassAssoc)
  async createClassAssoc(@Args('data', { type: () => ClassAssocInput }) newData?: ClassAssocInput,) {
    return await this.prisma.class_assoc.create({
      data: newData
    });
  }

  // Delete
  @Mutation((returns) => ClassAssoc)
  async deleteClassAssoc(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('class_assoc_code', { type: () => String }) class_assoc_code?: string,
    @Args('main_class', { type: () => Number }) main_class?: number,
    @Args('main_code', { type: () => String }) main_code?: string,
    @Args('sub_class', { type: () => Number }) sub_class?: number,
    @Args('sub_code', { type: () => String }) sub_code?: string) {
    return await this.prisma.class_assoc.delete({
      where: {
        party_ref_class_assoc_code_main_class_main_code_sub_class_sub_code: {
          party_ref: party_ref,
          class_assoc_code: class_assoc_code,
          main_class: main_class,
          main_code: main_code,
          sub_class: sub_class,
          sub_code: sub_code
        }
      }
    });
  }

  // Delete
  @Mutation((returns) => ClassAssoc)
  async deletebySubClassandInsertClassAssoc(
    @Args('data', { type: () => ClassAssocSubCodeArrayInput }) newData?: ClassAssocSubCodeArrayInput) {

    await this.prisma.class_assoc.deleteMany({
      where: {
        party_ref: newData.party_ref,
        class_assoc_code: newData.class_assoc_code,
        main_class: newData.main_class,
        main_code: newData.main_code,
        sub_class: newData.sub_class
      }
    });

    newData.sub_code.forEach(async (subCode: string) => {
      const assocDataNew = this.makeAssocData(newData,subCode);
      await this.createClassAssoc(assocDataNew);
    });

    return newData;
  }

  makeAssocData(assocData: ClassAssocSubCodeArrayInput, subCode: string) {
    const assocDataNew: ClassAssocInput = {
      applied: assocData.applied,
      assoc_code_description: assocData.assoc_code_description,
      class_assoc_code: assocData.class_assoc_code,
      description: assocData.description,
      main_class: assocData.main_class,
      main_code: assocData.main_code,
      party_ref: assocData.party_ref,
      sub_class: assocData.sub_class,
      sub_code: subCode,
      user_def: assocData.user_def,
      version_date: assocData.version_date,
      version_no: assocData.version_no,
      version_user: assocData.version_user
    };
    return assocDataNew;
  }

  // Update
  @Mutation((returns) => ClassAssoc)
  async updateClassAssoc(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('class_assoc_code', { type: () => String }) class_assoc_code?: string,
    @Args('main_class', { type: () => Number }) main_class?: number,
    @Args('main_code', { type: () => String }) main_code?: string,
    @Args('sub_class', { type: () => Number }) sub_class?: number,
    @Args('sub_code', { type: () => String }) sub_code?: string,
    @Args('data', { type: () => ClassAssocInput }) newData?: ClassAssocInput) {
    return await this.prisma.class_assoc.update({
      where: {
        party_ref_class_assoc_code_main_class_main_code_sub_class_sub_code: {
          party_ref: party_ref,
          class_assoc_code: class_assoc_code,
          main_class: main_class,
          main_code: main_code,
          sub_class: sub_class,
          sub_code: sub_code
        }
      },
      data: newData
    });
  }

  @Mutation((returns) => ClassAssoc)
  async sendClassAssocStaticToGloss(@Args('party_ref', { type: () => String }) party_ref: string) {
    let classAssocData = await this.prisma.class_assoc.findMany({
      where: {
        party_ref: party_ref,
      },
    });

    await this.prisma.party_data_pushed.upsert({
      where: {
        party_ref: party_ref
      },
      update: {
        party_class_assoc_data: JSON.stringify(classAssocData),
        version_date: new Date()
      },
      create: {
        party_ref: party_ref,
        party_template_data: '',
        party_class_assoc_data: JSON.stringify(classAssocData),
        party_swift_data: '',
        version_date: new Date(),
        version_user: 'ADMIN',
      },
    });

    this.postService.updateClassAssocStatic(classAssocData); {
      return classAssocData;
    }
  }

}

