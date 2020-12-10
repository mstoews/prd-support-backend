import { GraphQLModule } from '@nestjs/graphql';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AuthModule } from './resolvers/auth/auth.module';
import { UserModule } from './resolvers/user/user.module';
import { AppResolver } from './resolvers/app.resolver';
import { DateScalar } from './common/scalars/date.scalar';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PartyModule } from './resolvers/party/party.module';
import { PubSub } from 'graphql-subscriptions';
import { InstrumentsModule } from './resolvers/instruments/instruments.module';
import { HttpPostService } from './services/http-post/http-post.service';
import { MessagesController } from './messages/messages.controller';
import { InstrumentsResolver } from './instrument/instruments/instruments.resolver';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        buildSchemaOptions: {
          numberScalarMode: 'integer',
        },
        tracing: true,
        sortSchema: true,
        autoSchemaFile:
          configService.get('GRAPHQL_SCHEMA_DEST') || './src/schema.graphql',
        debug: configService.get('GRAPHQL_DEBUG') === '1' ? true : false,
        playground:
          configService.get('PLAYGROUND_ENABLE') === '1' ? true : false,
        context: ({ req }) => ({ req }),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    PartyModule,
    InstrumentsModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, AppResolver, DateScalar, HttpPostService, InstrumentsResolver],
})
export class AppModule {}
