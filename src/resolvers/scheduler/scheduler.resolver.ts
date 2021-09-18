import { InternalServerErrorException, Logger, UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GlossSchedulerInput } from 'src/models/inputs/scheduler.input';
import { GlossScheduler } from 'src/models/scheduler.model';
import { HttpPostService } from 'src/services/http-post/http-post.service';
import { PrismaService } from 'src/services/prisma.service';

@Resolver((of) => GlossScheduler)
export class SchedulerResolver {
  private readonly logger = new Logger('SchedulerResolver');

  constructor(
    private prisma: PrismaService,
    private postService: HttpPostService
  ) { }

  @Query((returns) => [GlossScheduler])
  async glossScheduler() {
    try {
      return await this.prisma.gloss_scheduler.findMany();
    }
    catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  // Delete
  @Mutation((returns) => GlossScheduler)
  async deleteglossScheduler(
    @Args('msg_type', { type: () => Number }) msg_type?: number,
    @Args('event_ref', { type: () => String }) event_ref?: string,
    @Args('due_date_time', { type: () => Date }) due_date_time?: Date,
    @Args('database_code', { type: () => String }) database_code?: string) {
    try {
      return await this.prisma.gloss_scheduler.delete({
        where: {
          msg_type_event_ref_due_date_time_database_code: {
            msg_type: msg_type,
            event_ref: event_ref,
            due_date_time: due_date_time,
            database_code: database_code
          }
        },
      });
    }
    catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  // Update
  @Mutation((returns) => GlossScheduler)
  async updateglossScheduler(
    @Args('msg_type', { type: () => Number }) msg_type?: number,
    @Args('event_ref', { type: () => String }) event_ref?: string,
    @Args('due_date_time', { type: () => Date }) due_date_time?: Date,
    @Args('database_code', { type: () => String }) database_code?: string,
    @Args('data', { nullable: false }) input?: GlossSchedulerInput) {
    try {
      return await this.prisma.gloss_scheduler.update({
        data: input,
        where: {
          msg_type_event_ref_due_date_time_database_code: {
            msg_type: msg_type,
            event_ref: event_ref,
            due_date_time: due_date_time,
            database_code: database_code
          }
        },
      });
    }
    catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  // Create
  @Mutation((returns) => GlossScheduler)
  async createglossScheduler(
    @Args('data', { nullable: false }) input?: GlossSchedulerInput) {
    this.logger.log(`Adding event : ${input.event_ref}`);
    try {
      const eventRef = await this.prisma.gloss_scheduler.create({
        data: input,
      });
      this.logger.log(`Added event : ${input.event_ref}`);
      return eventRef;
    }
    catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          this.logger.error(
            `There is a unique constraint violation, a new event cannot be created with this combination ${input.event_ref}`
          );
          throw new UnprocessableEntityException(`Event already exists with this combination: ${input.event_ref}`);
        }
      }
      throw new InternalServerErrorException(e);
    }
  }

  @Mutation((returns) => GlossScheduler)
  async sendSchedulerStaticToGloss() {
    let schedulerData = await this.prisma.gloss_scheduler.findMany();
    this.postService.updateglossSchedulerData(schedulerData); {
      return schedulerData;
    }
  }

}
