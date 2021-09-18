import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { PartyClassification } from '../../models/party.model';
import { PartyClassInput} from '../../models/inputs/party.input';

@Resolver((of) => PartyClassification)
export class PartyClassificationResolver {
  
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [PartyClassification])
  async partyClassificationByRef(
    @Args('party_ref',{ nullable: false}) party_ref?: string) 
    {
      return this.prisma.party_classification.findMany({ where: {
      party_ref : party_ref, 
      },              
    });
  }
  
  // Create Classification
  @Mutation((returns) => PartyClassification)
  async createPartyClassification(@Args('data', { type: () => PartyClassInput }) newData: PartyClassInput) {
    return this.prisma.party_classification.create({
      data: newData,
    });
  }

  // Update  Classification
  @Mutation((returns) => PartyClassification)
  async updatePartyClassification(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('class_type', { type: () => String }) class_type?: string,
    @Args('data', { type: () => PartyClassInput }) newData?: PartyClassInput,) {
    return this.prisma.party_classification.update(
      {
        where: {
          party_ref_class_type: {
          party_ref: party_ref,
          class_type: class_type,
          },
        },
        data: newData,

      });
  }

  // Delete Classification
  @Mutation((returns) => PartyClassification)
  async deletePartyClassification(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('class_type', { type: () => String }) class_type?: string,) {
    return this.prisma.party_classification.delete(
      {
        where: {
          party_ref_class_type: {
            party_ref: party_ref,
            class_type: class_type,
          },
        },
      });
  }
}
