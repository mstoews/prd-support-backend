import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { DashboardsResolver } from './dashboards/dashboards.resolver';

@Module({
    providers: [
      PrismaService, 
      DashboardsResolver
   ]
  })
 export class DashboardsModule {}