import { PrismaService } from '../services/prisma.service';
import { PaginationArgs } from '../common/pagination/pagination.args';
import { UserIdArgs } from '../models/args/user-id.args';
import { PartyIdArgs} from '../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Environment} from '../models/environment.models';

import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common'

import { environment as EnvironmentModel, Prisma } from '@prisma/client';

  @Resolver((of) => Environment)
  export class EnvironmentResolver {    
  constructor(
    private prisma: PrismaService) {}
  
  @Query((returns) => [Environment])
  async environement() { 
      return this.prisma.environment.findMany();
  }  
}

