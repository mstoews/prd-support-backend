# Start podman Postgres 
```bash
podman run -d \
    --name gloss-api-postgres \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v /custom/mount:/var/lib/postgresql/gloss-data \
    postgres
```

the first line above needs to be changed to linux other than alpine and then in the builder section of the docker file 
nodejs needs to be installed. 

# Podman 
## Installation and Setup
```bash
sudo yum install podman
id -Gn
userId wheel

sysctl -ar max_user_namespaces

$ cat /etc/subuid /etc/subgid
userId:100000:65536
userID:100000:65536
```
To allow for rootless containers user namespaces need to be
configured which are by default in CentOS 8. New users to the system
will be assigned their own unique mappings in the subuid and subgid
files. Other distributions may or may not have these configurations
made.

## Testing Installation
```bash
podman version
podman info
```
## Podman Command
```bash
podman image ls
podman ps
podman ps -a
podman search httpd
sed -E '/^(#|$)/d' /etc/containers/registries.conf
```
The search sub-command can be used to locate images. Images are
located in registries that are configured within the file:
/etc/containers/registries.conf

Containers are created from filesystem bundles called images. By
default no images are installed with podman. The ps sub-command is
used to list running containers. Use the option -a to list all containers
including stopped containers. There are no containers by default
either.

## Run Podman shell container
```bash
podman run -it rhscl/httpd-24-rhel7 /bin/bash
exit
podman ps
podman ps -a
```

## Managing Containers
```bash
podman stop mstoews/gloss-api-client:v1.1.1
podman restart mstoews/gloss-api-client:v1.1.1
podman kill mstoews/gloss-api-client:v1.1.1
podman restart -l
podman stop -a

podman rm gloss-api-client
podman rm -f gloss-api-client
podman rm -a -f 

podman rmi mstoews/gloss-api-client:v1.1.1
podman image rm mstoews/gloss-api-client:v1.1.1
podman rmi -a
```
-a is all
-f force
-r remove
-l list
# rmi - remove images for example:
```bash
podman rmi -a 
```

## Port mapping

```bash
$ podman run --name=gloss-api-client -d --publish-all rhscl/httpd-24-rhel7
$ podman port -l
80/tcp -> 0.0.0.0:4310
443/tcp -> 0.0.0.0:35443
$ sudo firewall-cmd --add-port 378138/tcp
```

```bash
$ podman exec -it gloss-api-client /bin/bash
$ curl localhost:4310
```











# Change the container 
in the Dockerfile 
```bash
FROM node:12 AS builder
```

# Query
  ### Party
  party: [Party!]!
  partyByRef(party_ref: String!): Party!
  partyByRefNo(ref: String!): Party!
  
  ## Assocation
  party_assoc: [PartyAssoc!]!
  partyAssocByRef(party_ref: String!): [PartyAssoc!]!
  partyAssocByRefAndType(assoc_type: String! party_ref: String! ): [PartyAssoc!]!
  
  ## Classification
  party_classification: [PartyClassification!]!
  party_classificationByRef(party_ref: String!): [PartyClassification!]!
  party_classificationByRefAndClass(class_type: String! party_ref: String!): [PartyClassification!]!
  
  ## Party Ext
  party_ext_ref: [PartyExtRef!]!
  party_ext_refByRef(party_ref: String!): [PartyExtRef!]!
  
  ## Party Flag
  party_flag: [PartyFlag!]!
  partyFlagByRef(party_ref: String!): [PartyFlag!]!
  
  
  ## Instruments
  party_instr: [PartyInstr!]!
  partyInstrByRef(party_ref: String!): [PartyInstr!]!
 
  ## SSI
  party_ssi: [PartySSI!]!
  partySSIByRef(party_ref: String!): [PartySSI!]!
  
  ## Narrative 
  partyNarrative: [PartyNarrative!]!
  partyNarrativeByRef(party_ref: String!): [PartyNarrative!]!
  partyNarrativeByRefAndType(narrative_type: String! party_ref: String!): [PartyNarrative!]!
  
  
# Instructions

Starter template for 😻 [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/).

> Checkout [NestJS Prisma Schematics](https://github.com/marcjulian/nestjs-prisma) to automatically add Prisma support to your Nest application.

## Features

- GraphQL w/ [playground](https://github.com/prisma/graphql-playground)
- Code-First w/ [decorators](https://docs.nestjs.com/graphql/quick-start#code-first)
- [Prisma](https://www.prisma.io/) for database modelling, migration and type-safe access (Postgres, MySQL & MongoDB)
- 🔐 JWT authentication w/ [passport-jwt](https://github.com/mikenicholson/passport-jwt)
- REST API docs w/ [Swagger](https://swagger.io/)

## Prisma Setup

### 1. Install Dependencies

Install the dependencies for the nest server:

```bash
npm install
```

### 2. Prisma2: Prisma Migrate

[Prisma Migrate](https://github.com/prisma/prisma2/tree/master/docs/prisma-migrate) is used to manage the schema and migration of the database.

Saving the migration of the database:

```bash
npx prisma migrate save --experimental
# or
npm run prisma:save
```

Perform the database migration:



npx prisma migrate up --experimental
# or
npm run prisma:up
```

### 3. Prisma2: Prisma Client JS

[Prisma Client JS](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/api) is a type-safe database client auto-generated based on the data model.

To generate Prisma Client JS execute, this will always be executed after `npm install`:

```bash
npx prisma generate
# or
npm run prisma:generate
```

### 4. Seed the database data with this script

Execute the script with this command:

```bash
npm run seed
```

### 5. Install Nestjs

The [Nestjs CLI](https://docs.nestjs.com/cli/usages) can be used to generate controller, services, resolvers and more.

```bash
npm i -g @nestjs/cli
```

**[⬆ back to top](#overview)**

## Start NestJS Server

Run Nest Server in Development mode:

```bash
npm run start

# watch mode
npm run start:dev
```

Run Nest Server in Production mode:

```bash
npm run start:prod
```

Playground for the NestJS Server is available here: http://localhost:3000/graphql

**[⬆ back to top](#overview)**

## Playground

Some queries and mutations are secured by an auth guard. You have to acquire a JWT token from `signup` or `login`. Add the the auth token as followed to **HTTP HEADERS** in the playground and replace `YOURTOKEN` here:

```json
{
  "Authorization": "Bearer YOURTOKEN"
}
```

## Rest Api

[RESTful API](http://localhost:3000/api) documentation available with Swagger.

## Docker

Nest serve is a Node.js application and it is easily [dockerized](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/).

See the [Dockerfile](./Dockerfile) on how to build a Docker image of your Nest server.

Now to build a Docker image of your own Nest server simply run:

```bash
# give your docker image a name
docker build -t <your username>/nest-prisma-server .
# for example
docker build -t nest-prisma-server .
```

After Docker build your docker image you are ready to start up a docker container running the nest server:

```bash
docker run -d -t -p 3000:3000 --env-file .env nest-prisma-server
```

Now open up [localhost:3000](http://localhost:3000) to verify that your nest server is running.

## Schema Development

Update the Prisma schema `prisma/schema.prisma` and after that run the following two commands:

```bash
npx prisma generate
# or in watch mode
npx prisma generate --watch
# or
npm run prisma:generate
npm run prisma:generate:watch
```

**[⬆ back to top](#overview)**

## NestJS - Api Schema

The [schema.graphql](./src/schema.graphql) is generated with [code first approach](https://docs.nestjs.com/graphql/quick-start#code-first). The schema is generated from the [models](./src/models/user.ts), the [resolvers](./src/resolvers/auth/auth.resolver.ts) and the [input](./src/resolvers/auth/dto/login.input.ts) classes.

You can use [class-validator](https://docs.nestjs.com/techniques/validation) to validate your inputs and arguments.

### Resolver

To implement the new query, a new resolver function needs to be added to `users.resolver.ts`.

```ts
@Query(returns => User)
async getUser(@Args() args): Promise<User> {
  return await this.prisma.client.user(args);
}
```

Restart the NestJS server and this time the Query to fetch a `user` should work.

**[⬆ back to top](#overview)**

## Graphql Client

A graphql client is necessary to consume the graphql api provided by the NestJS Server.

Checkout [Apollo](https://www.apollographql.com/) a popular graphql client which offers several clients for React, Angular, Vue.js, Native iOS, Native Android and more.

### Angular

#### Setup

To start using [Apollo Angular](https://www.apollographql.com/docs/angular/basics/setup.html) simply run in an Angular and Ionic project:

```bash
ng add apollo-angular
```

`HttpLink` from apollo-angular requires the `HttpClient`. Therefore, you need to add the `HttpClientModule` to the `AppModule`:

```ts
imports: [BrowserModule,
    HttpClientModule,
    ...,
    GraphQLModule],
```

You can also add the `GraphQLModule` in the `AppModule` to make `Apollo` available in your Angular App.

You need to set the URL to the NestJS Graphql Api. Open the file `src/app/graphql.module.ts` and update `uri`:

```ts
const uri = 'http://localhost:3000/graphql';
```

To use Apollo-Angular you can inject `private apollo: Apollo` into the constructor of a page, component or service.

**[⬆ back to top](#overview)**

#### Queries

To execute a query you can use:

```ts
this.apollo.query({query: YOUR_QUERY});

# or

this.apollo.watchQuery({
  query: YOUR_QUERY
}).valueChanges;
```

Here is an example how to fetch your profile from the NestJS Graphql Api:

```ts
const CurrentUserProfile = gql`
  query CurrentUserProfile {
    me {
      id
      email
      name
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.data = this.apollo.watchQuery({
      query: CurrentUserProfile,
    }).valueChanges;
  }
}
```

Use the `AsyncPipe` and [SelectPipe](https://www.apollographql.com/docs/angular/basics/queries.html#select-pipe) to unwrap the data Observable in the template:

```html
<div *ngIf="data | async | select: 'me' as me">
  <p>Me id: {{me.id}}</p>
  <p>Me email: {{me.email}}</p>
  <p>Me name: {{me.name}}</p>
</div>
```

Or unwrap the data using [RxJs](https://www.apollographql.com/docs/angular/basics/queries.html#rxjs).

This will end up in an `GraphQL error` because `Me` is protected by an `@UseGuards(GqlAuthGuard)` and requires an `Bearer TOKEN`.
Please refer to the [Authentication](#authentication) section.

**[⬆ back to top](#overview)**

#### Mutations

To execute a mutation you can use:

```ts
this.apollo.mutate({
  mutation: YOUR_MUTATION,
});
```

Here is an example how to login into your profile using the `login` Mutation:

```ts
const Login = gql`
  mutation Login {
    login(email: "test@example.com", password: "pizzaHawaii") {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.data = this.apollo.mutate({
      mutation: Login,
    });
  }
}
```

**[⬆ back to top](#overview)**

#### Subscriptions

To execute a subscription you can use:

```ts
this.apollo.subscribe({
  query: YOUR_SUBSCRIPTION_QUERY,
});
```

**[⬆ back to top](#overview)**

#### Authentication

To authenticate your requests you have to add your `TOKEN` you receive on `signup` and `login` [mutation](#mutations) to each request which is protected by the `@UseGuards(GqlAuthGuard)`.

Because the apollo client is using `HttpClient` under the hood you are able to simply use an `Interceptor` to add your token to the requests.

Create the following class:

```ts
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = 'YOUR_TOKEN'; // get from local storage
    if (token !== undefined) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req);
  }
}
```

Add the Interceptor to the `AppModule` providers like this:

```ts
providers: [
    ...
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ...
  ]
```

After you configured the Interceptor and retrieved the `TOKEN` from storage your request will succeed on resolvers with `@UseGuards(GqlAuthGuard)`.

**[⬆ back to top](#overview)**
