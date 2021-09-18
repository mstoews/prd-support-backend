import { Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassAssocInput } from 'src/models/inputs/party.input';
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
  async createClassAssoc(@Args('data', { type: () => ClassAssocInput }) newData?: ClassAssocInput) {
    return await this.prisma.class_assoc.create({
      data: newData
    });
  }

  // Update
  @Mutation((returns) => ClassAssoc)
  async updateClassAssoc(
    @Args('data', { type: () => ClassAssocInput }) newData?: ClassAssocInput) {
      this.logger.log(newData);
    return await this.prisma.class_assoc.update({
      where: {
        party_ref_class_assoc_code_code_type_class_1_code_1_class_2: {
          party_ref: newData.party_ref,
          class_assoc_code: newData.class_assoc_code,
          code_type: newData.code_type,
          class_1: newData.class_1,
          code_1: newData.code_1,
          class_2: newData.class_2
        }
      },
      data: newData
    });
  }

  @Mutation((returns) => ClassAssoc)
  async sendClassAssocStaticToGloss(
    @Args('party_ref', { type: () => String }) party_ref: string,
    @Args('environment', { type: () => String }) environment: string) {
    let classAssocData = await this.prisma.class_assoc.findMany({
      where: {
        party_ref: party_ref,
      },
    });

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

    this.postService.updateClassAssocStatic(classAssocData); {
      return classAssocData;
    }
  }

}

