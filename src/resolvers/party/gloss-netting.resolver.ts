import { Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NettingInput } from 'src/models/inputs/party.input';
import { Netting } from 'src/models/party.model';
import { HttpPostService } from 'src/services/http-post/http-post.service';
import { PrismaService } from '../../services/prisma.service';

@Resolver('Netting')
export class NettingResolver {

  private readonly logger = new Logger('NettingResolver');

  constructor(
    private prisma: PrismaService,
    private postService: HttpPostService
  ) { }

  @Query((returns) => [Netting])
  async partyNettingByRef(
    @Args('party_ref', { nullable: false }) party_ref?: string) {
    return await this.prisma.gloss_netting.findMany({
      where: {
        party_ref: party_ref,
      },
    });
  }

  // Creation
  @Mutation((returns) => Netting)
  async createNetting(@Args('data', { type: () => NettingInput }) newData?: NettingInput) {
    return this.prisma.gloss_netting.create({
      data: newData
    });
  }

  // Update
  @Mutation((returns) => Netting)
  async updateNetting(
    @Args('data', { type: () => NettingInput }) newData?: NettingInput) {
    this.logger.log(newData);
    return this.prisma.gloss_netting.update({
      where: {
        party_ref_net_driver_settle_code_transaction_type: {
          party_ref: newData.party_ref,
          net_driver: newData.net_driver,
          settle_code: newData.settle_code,
          transaction_type: newData.transaction_type,
        }
      },
      data: newData
    });
  }

  // Delete
  @Mutation((returns) => Netting)
  async deleteNetting(
    @Args('data', { type: () => NettingInput }) newData?: NettingInput) {
    return this.prisma.gloss_netting.delete({
      where: {
        party_ref_net_driver_settle_code_transaction_type: {
          party_ref: newData.party_ref,
          net_driver: newData.net_driver,
          settle_code: newData.settle_code,
          transaction_type: newData.transaction_type,
        }
      }
    });
  }

  @Mutation((returns) => Netting)
  async sendNettingStaticToGloss(
    @Args('party_ref', { type: () => String }) party_ref: string,
    @Args('environment', { type: () => String }) environment: string) {
    let nettingData = await this.prisma.gloss_netting.findMany({
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
        party_netting_data: JSON.stringify(nettingData),
        version_date: new Date()
      },
      create: {
        party_ref: party_ref,
        environment: environment,
        party_template_data: '',
        party_class_assoc_data: '',
        party_netting_data: JSON.stringify(nettingData),
        version_date: new Date(),
        version_user: 'ADMIN',
      },
    });

    this.postService.updateNettingStatic(nettingData); {
      return nettingData;
    }
  }

}

