import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { InstrClassification } from '../../models/instr.model';
import { InstrClassInput} from '../../models/inputs/instr.input';
import { instr_classification as ClassModel, Prisma } from '@prisma/client';

@Resolver((of) => InstrClassification)
export class InstrClassificationResolver {
  
  constructor(
    private prisma: PrismaService) 
  {}
  
  @Query((returns) => [InstrClassification])
  instr_classification() { 
      return this.prisma.instr_classification.findMany();
  }  
  
  @Query((returns) => [InstrClassification])
  instrClassification() { 
      return this.prisma.instr_classification.findMany();
  }  
  
  @Query((returns) => [InstrClassification])
  instrClassificationByRefAndClass(
    @Args('instr_ref',{ nullable: false}) instr_ref?: string, 
    @Args('class_type',{ nullable: false}) class_type?: string,) 
    {
      return this.prisma.instr_classification.findMany({ where: {
       class_type : class_type,
       instr_ref : instr_ref, 
      },              
    });
  }

  @Query((returns) => [InstrClassification])
  instrClassificationByRef(
    @Args('instr_ref',{ nullable: false}) instr_ref?: string) 
    {
      return this.prisma.instr_classification.findMany({ where: {
      instr_ref : instr_ref, 
      },              
    });
  }
    // Create
    @Mutation((returns) => InstrClassification)
    async createInstrClassification(@Args('data', { type: () => InstrClassInput }) newClassData: Prisma.instr_classificationCreateInput) {
      return this.prisma.instr_classification.create({
        data: newClassData,
      });
    }
  
    // Update
    @Mutation((returns) => InstrClassification)
    async updateInstrClassification(
      @Args('party_ref', { type: () => String }) party_ref?: string,
      @Args('class_type', { type: () => String }) class_type?: string,
      @Args('data', { type: () => InstrClassInput }) newData?: ClassModel,) {
      return this.prisma.instr_classification.update(
        {
          where: {
            instr_ref_class_type: {
              instr_ref: party_ref,
              class_type: class_type,
            },
          },
          data: newData,
  
        });
    }
  
    // Delete
    @Mutation((returns) => InstrClassification)
    async deleteInstrClassification(
      @Args('party_ref', { type: () => String }) party_ref?: string,
      @Args('class_type', { type: () => String }) class_type?: string,) {
      return this.prisma.instr_classification.delete(
        {
          where: {
            instr_ref_class_type: {
              instr_ref: party_ref,
              class_type: class_type,
            },
          },
        });
    }
}

