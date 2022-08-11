/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from 'src/services/prisma.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientMasterModel } from './client-master.model';
import { ClientMasterInputs } from './client-master.inputs';
import { Prisma } from '@prisma/client';
import { Logger } from '@nestjs/common';


@Resolver()
export class ClientMasterResolver {
    logger = new Logger('ClientMaster', true);
    constructor(private prisma: PrismaService)  { }

    @Query((returns) => [ClientMasterModel])
    async ClientMaster() {
        return  this.prisma.ct_master.findMany();
    }

    @Query((returns) => [ClientMasterModel])
    async ClientMastersById(
        @Args('clientid', { nullable: false }) clientid?: number)
        {
        return this.prisma.ct_master.findMany({
            where: {
                clientid
            },
        });
    }

    // Create
    @Mutation((returns) => ClientMasterModel)
    async createClientMasters(@Args('data', { type: () => ClientMasterInputs }) data: Prisma.ct_masterCreateInput) {
        return this.prisma.ct_master.create({
            data
        });
    }

    // Update
    @Mutation((returns) => ClientMasterModel)
    async updateClientMasters(
        @Args('clientid', { nullable: false }) clientid?: number,
        @Args('newData', { type: () => ClientMasterInputs }) data?: Prisma.ct_masterCreateInput) {
        return this.prisma.ct_master.update({
            where: {
                clientid: clientid
            },
            data: data
        });
    }

    // Delete
    @Mutation((returns) => ClientMasterModel)
    async deleteClientMasters(
        @Args('clientid', { type: () => Number }) clientid?: number,)
        {
        return this.prisma.ct_master.delete(
            {
                where: {
                    clientid
                }
            });
    }

}
