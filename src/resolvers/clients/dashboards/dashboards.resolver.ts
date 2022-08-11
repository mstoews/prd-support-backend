/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '../../../services/prisma.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DashboardModel } from './dashboards.model';
import { DashboardInputs } from './dashboard.inputs';
import { Prisma } from '@prisma/client';
import { Logger } from '@nestjs/common';

@Resolver()
export class DashboardsResolver {
    logger = new Logger('Dashboard', true);
    constructor(
        private prisma: PrismaService) { }

    @Query((returns) => [DashboardModel])
    async Dashboards() {
        const db = this.prisma.ct_dashboards.findMany();
        this.logger.debug(`Dashboard query ...`);
        return db;
    }
    
    @Query((returns) => DashboardModel)
    async DashboardsById(
        @Args('clientid', { type: () => Number }) clientid: number,
        @Args('dashboardtype', { type: () => String }) dashboardtype: string,) 
        {
        return this.prisma.ct_dashboards.findUnique({
            where: {
                clientid_dashboardtype: {
                    clientid: clientid,
                    dashboardtype: dashboardtype
                }
            },
        });
    }

    // Create
    @Mutation((returns) => DashboardModel)
    async createDashboards(@Args('data', { type: () => DashboardInputs }) newDashboardData: Prisma.ct_dashboardsCreateInput) {
        return this.prisma.ct_dashboards.create({
            data: newDashboardData,
        });
    }

    // Update
    @Mutation((returns) => DashboardModel)
    async updateDashboards(
        @Args('clientid', { type: () => Number }) clientid: number,
        @Args('dashboardtype', { type: () => String }) dashboardtype?: string,
        @Args('dashboard', { type: () => DashboardInputs }) dashboard?: Prisma.ct_dashboardsUpdateInput) {
        return this.prisma.ct_dashboards.update({
            where: {
                clientid_dashboardtype: {
                clientid: clientid,
                dashboardtype: dashboardtype
                }
            },
            data: dashboard
        });
    }

    // Delete
    @Mutation((returns) => DashboardModel)
    async deleteDashboards(
        @Args('clientid', { type: () => Number }) clientid: number,
        @Args('dashboardtype', { type: () => String }) dashboardtype?: string,) {
        return this.prisma.ct_dashboards.delete(
            {
                where: {
                    clientid_dashboardtype: {
                    clientid: clientid,
                    dashboardtype: dashboardtype
                    }
                }            
            });
    }
}
