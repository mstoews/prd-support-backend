import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class DashboardInputs {
    
    @Field ({nullable:false}) dashboard_parent: number;  
    @Field ({nullable:false}) dashboard_child: number;  
    @Field ({nullable:true})  data_item: string;
    @Field ({nullable:true})  title: string;
    @Field ({nullable:true})  amount: number;
}