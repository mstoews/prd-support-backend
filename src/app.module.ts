import { GraphQLModule } from '@nestjs/graphql';
import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AuthModule } from './resolvers/auth/auth.module';
import { UserModule } from './resolvers/user/user.module';
import { AppResolver } from './resolvers/app.resolver';
import { DateScalar } from './common/scalars/date.scalar';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MessagesController } from './messages/messages.controller';
import { KanbanModule} from './resolvers/kanban/kanban.module';
import config from './configs/config';
import { GraphqlConfig } from './configs/config.interface';

import { JiraModule } from './resolvers/clients/jira/jira.module';
import { GeneosModule } from './resolvers/clients/geneos/geneos.module';
import { DashboardsModule } from './resolvers/clients/dashboards.module';
import { ClientsModule } from './resolvers/clients/clients.module';
import { ClientsMasterResolver } from './resolvers/clients/master/clients-master.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    KanbanModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    JiraModule,
    GeneosModule,
    DashboardsModule,
    ClientsModule,
    
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, AppResolver, DateScalar, ClientsMasterResolver],
})
export class AppModule {}
