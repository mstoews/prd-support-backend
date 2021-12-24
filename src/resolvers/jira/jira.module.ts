import { Module } from '@nestjs/common';
import { JiraResolver } from './jira.resolver';


@Module({})
export class JiraModule {
    providers: [JiraResolver]
}
