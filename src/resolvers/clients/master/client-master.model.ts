import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ClientMasterModel {
    @Field ({nullable: false}) clientid:    number;
    @Field ({nullable: false}) client_name: string;
    @Field ({nullable: false}) geneos_id  : string;
    @Field ({nullable: false}) jira_id    : string;
    @Field ({nullable: false}) remedy_id  : string;
    @Field ({nullable: false}) location   : string;
    @Field ({nullable: false}) description: string;
    @Field ({nullable: false}) update_date: string;
    @Field ({nullable: false}) update_user: string;
}
