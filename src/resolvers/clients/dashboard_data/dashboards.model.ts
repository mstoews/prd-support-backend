import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DashboardModel {
    @Field ({nullable:false}) dashboard_parent: string;  
    @Field ({nullable:false}) dashboard_child: string;  
    @Field ({nullable:true})  data_item: string;
    @Field ({nullable:true})  title: string;
    @Field ({nullable:true})  amount: number;
}