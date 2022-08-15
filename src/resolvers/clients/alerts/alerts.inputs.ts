import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class AlertInputs {
@Field ({nullable:false}) client_id: number;
@Field ({nullable:false}) geneos_id: string;
@Field ({nullable:false}) japan_date: string;
@Field ({nullable:false}) day_of_the_week: string;
@Field ({nullable:false}) severity: string;
@Field ({nullable:false}) gateway: string;
@Field ({nullable:false}) entity: string;
@Field ({nullable:false}) sampler: string;
@Field ({nullable:false}) varname: string;
}