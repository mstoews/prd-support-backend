import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Environment {
    @Field ({nullable:false}) environment: string;
    @Field ({nullable:false}) image: string;
    @Field ({nullable:false}) description: string;
    @Field ({nullable:false}) usr: string;
    @Field ({nullable:false}) backend_url: string;
    @Field ({nullable:false}) active: string;
}


/*
    environment varchar(10) not null,
    image varchar(255) null,
    description varchar(30) null,
    usr varchar(15) null,
    active char(1) null,
*/