import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class DashboardInputs {
    @Field ({nullable:false}) clientid: number;  
    @Field ({nullable:false}) dashboardtype: string;  
    @Field ({nullable:true})  maintitle: string;
    @Field ({nullable:true})  maintitlecount: string;
    @Field ({nullable:true})  subtitle: string;
    @Field ({nullable:true})  maintitlecountyesterday: string;
    @Field ({nullable:true})  maintitlecounttwodays: string;
    @Field ({nullable:true})  maintitlecountthreedays: string;
}