import { Field,Int,ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Party {
   @Field({ nullable: true }) party_ref:             string;    
   @Field({ nullable: true }) party_type:            string;  
   @Field({ nullable: true }) party_short_name:      string;
   @Field({ nullable: true }) party_long_name:       string;
   @Field({ nullable: true }) party_extra_long_name: string;
   @Field({ nullable: true }) active_ind:            string;
   @Field({ nullable: true }) version_date:          Date;
   @Field(type => Int) version_no:                   number;
   @Field({ nullable: true }) version_user:          string;
   @Field(type => [PartyAssoc], { nullable: 'items'})  
   party_assoc: PartyAssoc[];
}

ObjectType()
export class ParentParty {
   @Field({ nullable: true }) party_ref:             string;    
   @Field({ nullable: true }) party_type:            string;  
   @Field({ nullable: true }) party_short_name:      string;
   @Field({ nullable: true }) party_long_name:       string;
   @Field({ nullable: true }) party_extra_long_name: string;
   @Field({ nullable: true }) active_ind:            string;
   @Field({ nullable: true }) version_date:          Date;
}

@ObjectType()
export class SimpleParty{
  @Field(type => [ParentParty]) party: ParentParty[];
  @Field(type => [PartyExtRef]) party_ext_ref: PartyExtRef[];
  @Field(type => [PartyAssoc])  party_assoc: PartyAssoc[];
}


@ObjectType()
export class  PartyClassification {
    party_ref:    string;  
    class_type:   string;
    class_code:   string;
    user_def:     string;
    description:  string;
    version_date: Date;
    version_no:   number;
    version_user: string;
}
 
  
@ObjectType()
export class PartyExtRef {
    party_ref:          string; 
    party_ext_ref_type: string;
    party_ext_ref:      string;
    user_def:           string;
    description:        string;
    version_date:       Date;
    version_no:         number;
    version_user:       string;
    
  }
  
@ObjectType()
export class  PartyFlag {
    party_ref:    string;
    flag_type:    number;
    flag_code:    string;
    user_def:     string;
    description:  string;
    @Field()
    version_date: Date;
    version_no:   number;
    version_user: string;
  }
  
@ObjectType()
export class  PartyInstr {
    party_ref:      string;
    instr_type:     string;
    instr_ref_type: string;
    instr_ref:      string;
    user_def:       string;
    description:    string;
    version_date:   Date;
    version_no:     number;
    version_user:   string;
  }
  
@ObjectType()
export class  PartyNarrative {
    party_ref:    string;
    narr_type:    string;
    narrative:    string;
    user_def:     string;
    description:  string;
    version_date: Date;
    version_no:   number;
    version_user: string;
  }

@ObjectType()
export class  PartyAssoc {
  party_ref:       string;
  assoc_type:      string;
  assoc_party_ref: string;
  user_def:       string;
  description:     string;
  version_date:  Date;      
  version_no:    number;      
  version_user:  string;   
}

@ObjectType()
export class  PartySSI {
  party_ref:     string;       
  depot_alias:   string;      
  depot_descr:   string; 
  depot_type:    string; 
  comms_service: string;  
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

@ObjectType()
export class PartySwift {
   party_ref:       string;    
   bic_code:        string;  
   logical_term_id: string;
   version_date:    Date;
   version_no:      number;
   version_user:    string;
}



