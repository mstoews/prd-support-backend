import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class ClientServiceInputs {
    @Field ({nullable: false}) clientid: string;
    @Field ({nullable: false}) clientname: string;             
    @Field ({nullable: false}) rag: string;
    @Field ({nullable: false}) rag_trend: string;              
    @Field ({nullable: false}) application: string;            
    @Field ({nullable: false}) client_service_manager: string; 
    @Field ({nullable: false}) environment: string;            
    @Field ({nullable: false}) open_issues_id: string;
    @Field ({nullable: false}) last_updated: string;
    @Field ({nullable: false}) csm_contacts: string;
    @Field ({nullable: false}) timeandmaterialgoalsid: string; 
    @Field ({nullable: false}) contacts: string;               
}