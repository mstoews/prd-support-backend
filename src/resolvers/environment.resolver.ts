/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '../services/prisma.service';
import { Resolver, Query} from '@nestjs/graphql';
import { Environment} from '../models/environment.models';

  @Resolver((of) => Environment)
  export class EnvironmentResolver {    
  constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [Environment])
  async environment() { 
      return this.prisma.prd_env.findMany();
  }  
}

