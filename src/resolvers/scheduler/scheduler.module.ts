import { HttpModule, Module } from '@nestjs/common';
import { HttpPostService } from 'src/services/http-post/http-post.service';
import { PrismaService } from '../../services/prisma.service';
import { SchedulerResolver } from './scheduler.resolver';

@Module({
  imports: [HttpModule],
  providers: [SchedulerResolver, PrismaService, HttpPostService]
})
export class SchedulerModule { }
