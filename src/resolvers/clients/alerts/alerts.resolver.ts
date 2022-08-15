/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '../../../services/prisma.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AlertModel } from './alerts.model';
import { AlertInputs } from './alerts.inputs';
import { Prisma } from '@prisma/client';
import { Logger } from '@nestjs/common';

@Resolver()
export class AlertsResolver {
    logger = new Logger('Dashboard', true);
    constructor(
        private prisma: PrismaService) { }

    @Query((returns) => [AlertModel])
    async Dashboards() {
        const db = this.prisma.ct_alerts.findMany();
        this.logger.debug(`Alerts query ...`);
        return db;
    }
    
    @Query((returns) => AlertModel)
    async AlertById(
        @Args('geneos_id', { type: () => Number }) geneos_id: number)
        {
        return this.prisma.ct_alerts.findUnique({
            where: { geneos_id: geneos_id },
        });
    }

    // Create
    @Mutation((returns) => AlertModel)
    async createDashboards(@Args('data', { type: () => AlertInputs }) newAlertData: Prisma.ct_alertsCreateInput) {
        return this.prisma.ct_alerts.create({
            data: newAlertData,
        });
    }

    // Update
    @Mutation((returns) => AlertModel)
    async updateDashboards(
        @Args('geneos_id', { type: () => Number }) geneos_id: number,
        @Args('alert', { type: () => AlertInputs }) alert?: Prisma.ct_alertsUpdateInput) {
        return this.prisma.ct_alerts.update({
            where:  {geneos_id: geneos_id },
            data: alert
        });
    }

    // Delete
    @Mutation((returns) => AlertModel)
    async deleteDashboards(
        @Args('geneos_id', { type: () => Number }) geneos_id: number) {
        return this.prisma.ct_alerts.delete(
            {  where:  {geneos_id: geneos_id },  });
    }
}
