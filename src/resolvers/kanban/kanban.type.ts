/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PrismaService } from '../../services/prisma.service';
import { Resolver, Query, Parent, Args, ResolveField, Mutation } from '@nestjs/graphql';
import { kb_type as TypeModel } from '../../models/kanban.model';
import { Prisma } from '@prisma/client';
import { TaskStatusInputs as TypeInputs } from 'src/models/inputs/kanban.inputs';

@Resolver('KanbanTypeResolver')
export class KanbanTypeResolver {
    constructor(
        private prisma: PrismaService) { }

    @Query((returns) => [TypeModel])
    async KanbanType() {
        return this.prisma.kb_type.findMany();
    }

    @Query((returns) => [TypeModel])
    async KanbanTypeById(@Args('type', { type: () => String }) type: string) {
        return this.prisma.kb_type.findMany({
            where: {
                type: type
            },
        });
    }

    // Create
    @Mutation((returns) => TypeModel)
    async createKanbanType(@Args('data', { type: () => TypeInputs }) newUserData: Prisma.kb_typeCreateInput) {
        return this.prisma.kb_type.create({
            data: newUserData,
        });
    }

    // Update
    @Mutation((returns) => TypeModel)
    async updateKanbanType(
        @Args('type', { type: () => String }) type?: string,
        @Args('newData', { type: () => TypeInputs }) newData?: Prisma.kb_typeUpdateInput) {
        return this.prisma.kb_type.update({
            where: {
                type : type
            },
            data: newData
        });
    }

    // Delete
    @Mutation((returns) => TypeModel)
    async deleteKanbanStatus(
        @Args('type', { type: () => String }) type?: string,) {
        return this.prisma.kb_type.delete(
            {
                where: {
                    type : type
                }
            });
    }

}


