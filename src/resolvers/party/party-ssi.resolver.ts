import { PrismaService } from './../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { PartyIdArgs } from '../../models/args/party-ref.args';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PartySSI } from '../../models/party.model';
import { PartySSIInput } from '../../models/inputs/party.input';
import { Something } from '../../models/party.model';

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common'

import { party_ssi as PartySSIModel, Prisma } from '@prisma/client';

@Resolver((of) => PartySSI)
export class PartySSIResolver {

  constructor(private prisma: PrismaService) { }

  @Query((returns) => [PartySSI])
  party_ssi() {
    return this.prisma.party_ssi.findMany();
  }

  @Query((returns) => [PartySSI])
  partySSI() {
    return this.prisma.party_ssi.findMany();
  }

  @Query((returns) => [PartySSI])
  async partySSIByRef(
    @Args('party_ref', { nullable: false }) ref?: string) {
    return this.prisma.party_ssi.findMany({
      where: {
        party_ref: ref,
      },
    });
  }

  @Mutation((returns) => PartySSI)
  async updateSSI(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('depot_alias', { type: () => String }) depot_alias?: string,
    @Args('data', { type: () => PartySSIInput }) newData?: PartySSIModel,) {
    return this.prisma.party_ssi.update(
      {
        where: {
          party_ref_depot_alias: {
            party_ref: party_ref,
            depot_alias: depot_alias,
          },
        },
        data: newData,
      });
  }

  @Mutation((returns) => PartySSI)
  async deleteSSI(
    @Args('party_ref', { type: () => String }) party_ref?: string,
    @Args('depot_alias', { type: () => String }) depot_alias?: string,) {
    return this.prisma.party_ssi.delete(
      {
        where: {
          party_ref_depot_alias: {
            party_ref: party_ref,
            depot_alias: depot_alias,
          },
        },
      });
  }
}

