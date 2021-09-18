/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { kb_status as StatusModel } from '../../models/kanban.model';
import { Prisma } from '@prisma/client';
import { TaskStatusInputs as StatusInputs } from 'src/models/inputs/kanban.inputs';

@Resolver('KanbanStatusResolver')
export class KanbanStatusResolver {
    constructor(
        private prisma: PrismaService) { }

    @Query((returns) => [StatusModel])
    async KanbanStatus() {
        return this.prisma.kb_status.findMany();
    }

    @Query((returns) => [StatusModel])
    async KanbanStatusById(@Args('status', { type: () => String }) id: string) {
        return this.prisma.kb_status.findMany({
            where: {
                status: id
            },
        });
    }

    // Create
    @Mutation((returns) => StatusModel)
    async createKanbanStatus(@Args('data', { type: () => StatusInputs }) newUserData: Prisma.kb_statusCreateInput) {
        return this.prisma.kb_status.create({
            data: newUserData,
        });
    }

    // Update
    @Mutation((returns) => StatusModel)
    async updateKanbanStatus(
        @Args('id', { type: () => String }) id?: string,
        @Args('newData', { type: () => StatusInputs }) newData?: Prisma.kb_statusUpdateInput) {
        return this.prisma.kb_status.update({
            where: {
                status: id
            },
            data: newData
        });
    }

    // Delete
    @Mutation((returns) => StatusModel)
    async deleteKanbanStatus(
        @Args('status', { type: () => String }) status?: string,) {
        return this.prisma.kb_status.delete(
            {
                where: {
                    status: status
                }
            });
    }

}




