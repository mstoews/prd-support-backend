import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { DashboardsResolver } from './dashboard_data/dashboards.resolver';

@Module({
    providers: [
      PrismaService, 
      DashboardsResolver
   ]
  })
 export class DashboardsModule {}