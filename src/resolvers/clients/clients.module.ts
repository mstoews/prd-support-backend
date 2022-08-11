import { Module } from '@nestjs/common';
import { ClientServiceResolver } from './client-service/client-service.resolver';
import { PrismaService } from '../../services/prisma.service';
import { IssueResolver } from './issue/issue.resolver';
import { AlertsResolver } from './alerts/alerts.resolver';
import { RequestResolver } from './request/request.resolver';

@Module({
  providers: [
    ClientServiceResolver, 
    PrismaService, IssueResolver, AlertsResolver, RequestResolver]
})
export class ClientsModule {}
