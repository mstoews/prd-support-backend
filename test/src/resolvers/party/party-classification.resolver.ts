import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { PartyClassification } from '../../models/party.model';
import { PartyClassInput} from '../../models/inputs/party.input';
import { party_classification as ClassModel, Prisma } from '@prisma/client';


@Resolver((of) => PartyClassification)
export class PartyClassificationResolver {
  
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [PartyClassification])
  party_classification() { 
      return this.prisma.party_instr.findMany();
  }  
  

  @Query((returns) => [PartyClassification])
  party_classificationByRefAndClass(
    @Args('party_ref',{ nullable: false}) party_ref?: string, 
    @Args('class_type',{ nullable: false}) class_type?: string,) 
    {
      return this.prisma.party_classification.findMany({ where: {
       party_ref : party_ref, 
       class_type : class_type
       
      },              
    });
  }


  @Query((returns) => [PartyClassification])
  partyClassification() { 
      return this.prisma.party_instr.findMany();
  }  
  

  @Query((returns) => [PartyClassification])
  partyClassificationByRefAndClass(
    @Args('party_ref',{ nullable: false}) party_ref?: string, 
    @Args('class_type',{ nullable: false}) class_type?: string,) 
    {
      return this.prisma.party_classification.findMany({ where: {
       party_ref : party_ref, 
       class_type : class_type,
      },              
    });
  }

  @Query((returns) => [PartyClassification])
  party_classificationByRef(
    @Args('party_ref',{ nullable: false}) party_ref?: string) 
    {
      return this.prisma.party_instr.findMany({ where: {
      party_ref : party_ref, 
      },              
    });
  }
  

  @Query((returns) => [PartyClassification])
  partyClassificationByRef(
    @Args('party_ref',{ nullable: false}) party_ref?: string) 
    {
      return this.prisma.party_instr.findMany({ where: {
      party_ref : party_ref, 
      },              
    });
  }
  

  @Mutation((returns) => PartyClassification)
  async createPartyClassification(@Args('data', { type: () => PartyClassInput })  newClassData: Prisma.partyCreateInput) {
    return this.prisma.party.create({
      data: newClassData,
    });
  }
  

  @Mutation((returns) => PartyClassification)
  async updateParty(params: {
    where: Prisma.party_classificationWhereUniqueInput;
    data: Prisma.party_classificationUpdateInput;
  }): Promise<ClassModel> {
    const { data, where } = params;
    return this.prisma.party_classification.update({
      data,
      where,
    });
  }
  
  @Mutation((returns) => PartyClassification)
  async deleteParty(where: Prisma.party_classificationWhereUniqueInput): Promise<ClassModel> {
    return this.prisma.party_classification.delete({
      where,
    });
  }
}




