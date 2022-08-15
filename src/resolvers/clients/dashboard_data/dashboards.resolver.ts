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
        const db = this.prisma.ct_dashboard_data.findMany();
        this.logger.debug(`Dashboard query ...`);
        return db;
    }
    
    @Query((returns) => DashboardModel)
    async DashboardsById(
        @Args('dashboard_parent', { type: () => Number }) dashboard_parent: number,
        @Args('dashboard_child', { type: () => Number }) dashboard_child: number,) 
        {
        return this.prisma.ct_dashboard_data.findUnique({
            where: {
                    dashboard_parent_dashboard_child: {
                    dashboard_parent: dashboard_parent,
                    dashboard_child: dashboard_child
                },
            },
        });
    }

    // Create
    @Mutation((returns) => DashboardModel)
    async createDashboards(@Args('data', { type: () => DashboardInputs }) newDashboardData: Prisma.ct_dashboard_dataCreateInput) {
        return this.prisma.ct_dashboard_data.create({
            data: newDashboardData,
        });
    }

    // Update
    @Mutation((returns) => DashboardModel)
    async updateDashboards(
        @Args('dashboard_parent', { type: () => Number }) dashboard_parent: number,
        @Args('dashboard_child', { type: () => Number }) dashboard_child: number,
        @Args('dashboard', { type: () => DashboardInputs }) dashboard?: Prisma.ct_dashboard_dataUpdateInput) {
        return this.prisma.ct_dashboard_data.update({
            where: {
                dashboard_parent_dashboard_child: {
                dashboard_parent: dashboard_parent,
                dashboard_child: dashboard_child,
                }
            },
            data: dashboard
        });
    }

    // Delete
    @Mutation((returns) => DashboardModel)
    async deleteDashboards(
        @Args('dashboard_parent', { type: () => Number }) dashboard_parent: number,
        @Args('dashboard_child', { type: () => Number }) dashboard_child: number) {
        return this.prisma.ct_dashboard_data.delete(
            {
                where: {
                    dashboard_parent_dashboard_child: {
                    dashboard_parent: dashboard_parent,
                    dashboard_child: dashboard_child,
                    }
                },
            });
    }
}
