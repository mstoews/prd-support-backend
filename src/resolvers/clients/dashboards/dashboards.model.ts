import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DashboardModel {
    @Field({nullable:false}) clientid: number;  
    @Field ({nullable:false}) dashboardtype: string;  
    @Field ({nullable:true})  maintitle: string;
    @Field ({nullable:true})  maintitlecount: string;
    @Field ({nullable:true})  subtitle: string;
    @Field ({nullable:true})  maintitlecountyesterday: string;
    @Field ({nullable:true})  maintitlecounttwodays: string;
    @Field ({nullable:true})  maintitlecountthreedays: string;
}