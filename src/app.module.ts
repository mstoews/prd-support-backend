import { GraphQLModule } from '@nestjs/graphql';
import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AuthModule } from './resolvers/auth/auth.module';
import { UserModule } from './resolvers/user/user.module';
import { AppResolver } from './resolvers/app.resolver';
import { DateScalar } from './common/scalars/date.scalar';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PartyModule } from './resolvers/party/party.module';
import { InstrumentsModule } from './resolvers/instruments/instruments.module';
import { HttpPostService } from './services/http-post/http-post.service';
import { MessagesController } from './messages/messages.controller';
import { KanbanModule} from './models/kanban/kanban.module';
import config from './configs/config';
import { GraphqlConfig } from './configs/config.interface';
import { SchedulerModule } from './resolvers/scheduler/scheduler.module';

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
    PartyModule,
    SchedulerModule,
    InstrumentsModule,
    KanbanModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, AppResolver, DateScalar, HttpPostService],
})
export class AppModule {}
