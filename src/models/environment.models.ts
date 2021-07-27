import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Environment {
    @Field ({nullable:false}) environment: string;
    @Field ({nullable:false}) description: string;
    @Field ({nullable:false}) sst_nestjsserver_url: string;
    @Field ({nullable:false}) sst_pythonserver_url: string;
    @Field ({nullable:false}) sst_springserver_url: string;
    @Field ({nullable:false}) active: string;
}