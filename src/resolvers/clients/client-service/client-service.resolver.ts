/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from 'src/services/prisma.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientServiceModel } from './client-service.model';
import { ClientServiceInputs } from './client-service.inputs';
import { Prisma } from '@prisma/client';
import { Logger } from '@nestjs/common';


@Resolver()
export class ClientServiceResolver {
    logger = new Logger('ClientService', true);
    constructor(private prisma: PrismaService) { }

    @Query((returns) => [ClientServiceModel])
    async ClientService() {
        return  this.prisma.ct_csm_master.findMany();
    }

    @Query((returns) => [ClientServiceModel])
    async ClientServicesById(
        @Args('clientid', { nullable: false }) client_id?: number)
        {
        return this.prisma.ct_csm_master.findMany({
            where: {
                client_id
            },
        });
    }

    // Create
    @Mutation((returns) => ClientServiceModel)
    async createClientServices(@Args('data', { type: () => ClientServiceInputs }) data: Prisma.ct_csm_masterCreateInput) {
        return this.prisma.ct_csm_master.create({
            data
        });
    }

    // Update
    @Mutation((returns) => ClientServiceModel)
    async updateClientServices(
        @Args('client_id', { nullable: false }) client_id?: number,
        @Args('newData', { type: () => ClientServiceInputs }) data?: Prisma.ct_csm_masterCreateInput) {
        return this.prisma.ct_csm_master.update({
            where: {
                client_id: client_id
            },
            data: data
        });
    }

    // Delete
    @Mutation((returns) => ClientServiceModel)
    async deleteClientServices(
        @Args('client_id', { type: () => Number }) client_id?: number,)
        {
        return this.prisma.ct_csm_master.delete(
            {
                where: {
                    client_id
                }
            });
    }

}
