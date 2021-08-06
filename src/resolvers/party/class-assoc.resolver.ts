import { Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassAssocInput, ClassAssocStepperInput } from 'src/models/inputs/party.input';
import { ClassAssoc, ClassAssocStepper } from 'src/models/party.model';
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

  @Query((returns) => [ClassAssocStepper])
  async partyClassAssocStepperByRef(
    @Args('party_ref', { nullable: false }) party_ref?: string) {
    return await this.prisma.class_assoc_stepper.findMany({
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

  // Creation
  @Mutation((returns) => ClassAssocStepper)
  async createClassAssocStepper(@Args('data', { type: () => ClassAssocStepperInput }) newData?: ClassAssocStepperInput,) {
    return await this.prisma.class_assoc_stepper.create({
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

  // Update
  @Mutation((returns) => ClassAssocStepper)
  async updateClassAssocStepper(
    @Args('data', { type: () => ClassAssocStepperInput }) newData?: ClassAssocStepperInput) {
      this.logger.log(newData);
    return await this.prisma.class_assoc_stepper.update({
      where: {
        party_ref_class_assoc_code_class_1_code_1_class_2: {
          party_ref: newData.party_ref,
          class_assoc_code: newData.class_assoc_code,
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
        version_date: new Date(),
        version_user: 'ADMIN',
      },
    });

    this.postService.updateClassAssocStatic(classAssocData); {
      return classAssocData;
    }
  }

  @Mutation((returns) => ClassAssocStepper)
  async sendClassAssocStepperStaticToGloss(
    @Args('party_ref', { type: () => String }) party_ref: string,
    @Args('environment', { type: () => String }) environment: string) {
    let classAssocData = await this.prisma.class_assoc_stepper.findMany({
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
        version_date: new Date(),
        version_user: 'ADMIN',
      },
    });

    this.postService.updateClassAssocStatic(classAssocData); {
      return classAssocData;
    }
  }

}

