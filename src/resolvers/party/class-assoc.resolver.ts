import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ClassAssoc } from 'src/models/party.model';
import { ClassAssocInput } from 'src/models/inputs/party.input';
import { Logger } from '@nestjs/common';
import { HttpPostService } from 'src/services/http-post/http-post.service';


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
    return this.prisma.class_assoc.findMany({
      where: {
        party_ref: party_ref,
      },
    });
  }

  // Creation
  @Mutation((returns) => ClassAssoc)
  async createClassAssoc(@Args('data', { type: () => ClassAssocInput }) newData?: ClassAssocInput,) {
    return this.prisma.class_assoc.create({
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
    return this.prisma.class_assoc.delete({
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
    return this.prisma.class_assoc.update({
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
    this.postService.updateClassAssocStatic(classAssocData); {
      return classAssocData;
    }
  }

}

