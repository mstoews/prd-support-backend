import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class PartySSI {
    party_ref:     string;
    depot_alias:   string;
    depot_descr:   string;
    depot_type:    string;
    ccy:           string;
    dacc_ref:      string;
    account_no:    string;
    account_name:  string;
    depo_ref:      string;
    active_ind:    string;
    user_def:      string;
    description:   string;
    version_date:  Date; 
    version_no:    number;   
    version_user:  string;
}