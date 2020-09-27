import { InputType, Field, ArgsType } from '@nestjs/graphql';

@InputType()
export class PartyInput {
  @Field({ nullable: true })  party_ref:             string;  
  @Field({ nullable: true })  party_type:            string;
  @Field({ nullable: true })  party_short_name:      string;
  @Field({ nullable: true })  party_long_name:       string;
  @Field({ nullable: true })  party_extra_long_name: string;
  @Field({ nullable: true })  active_ind:            string;
  @Field({ nullable: true })  version_date:          Date;
  @Field({ nullable: true })  version_no:            number;
  @Field({ nullable: true })  version_user:          string;
}

@InputType()
export class PartyClassInput {
  @Field({ nullable: false }) party_ref:   string;  
  @Field({ nullable: false }) class_type:  string;
  @Field({ nullable: true }) class_code:  string;
  @Field({ nullable: true }) user_def:    string;
  @Field({ nullable: true }) description: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no:  number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class PartyExtRefInput {
 @Field({nullable: false }) party_ref:          string; 
 @Field({nullable: false }) party_ext_ref_type: string;
 @Field({nullable: true }) party_ext_ref:      string;
 @Field({nullable: true }) user_def:           string;
 @Field({nullable: true }) description:        string;
 @Field({nullable: true }) version_date:       Date;
 @Field({nullable: true }) version_no:         number;
 @Field({nullable: true }) version_user:       string;
}
  
@InputType()
export class  PartyFlagInput {
   @Field({nullable: true }) party_ref:    string;
   @Field({nullable: true }) flag_type:    number;
   @Field({nullable: true }) flag_code:    string;
   @Field({nullable: true }) user_def:     string;
   @Field({nullable: true }) description:  string;
   @Field({nullable: true }) version_date: Date;
   @Field({nullable: true }) version_no:   number;
   @Field({nullable: true }) version_user: string;
  }
  
@InputType()
export class  PartyInstrInput {
  @Field({nullable: true })  party_ref:      string;
  @Field({nullable: true })  instr_ref:      string;
  @Field({nullable: true })  instr_type:     string;
  @Field({nullable: true })  instr_ref_type: string;
  @Field({nullable: true })  user_def:       string;
  @Field({nullable: true })  description:    string;
  @Field({nullable: true })  version_date:   Date;
  @Field({nullable: true })  version_no:     number;
  @Field({nullable: true })  version_user:   string;
  }
  
@InputType()
export class  PartyNarrativeInput {
  @Field({nullable: true })  party_ref:    string;
  @Field({nullable: true })  narr_type:    string;
  @Field({nullable: true })  narrative:    string;
  @Field({nullable: true })  user_def:     string;
  @Field({nullable: true })  description:  string;
  @Field({nullable: true })  version_date: Date;
  @Field({nullable: true })  version_no:   number;
  @Field({nullable: true })  version_user: string;
  }

  @InputType()
  export class  PartyAssocInput {
   @Field({nullable: null}) party_ref:       string;
   @Field({nullable: null}) assoc_type:      string;
   @Field({nullable: null}) assoc_party_ref: string;
   @Field({nullable: null}) user_def:       string;
   @Field({nullable: null}) description:     string;
   @Field({nullable: null}) version_date:  Date;      
   @Field({nullable: null}) version_no:    number;      
   @Field({nullable: null}) version_user:  string;   
    }

    @InputType()
    export class  PartySSIInput {
    @Field({nullable: null})  party_ref:     string;       
    @Field({nullable: null})  depot_alias:   string;      
    @Field({nullable: null})  depot_descr:   string; 
    @Field({nullable: null})  depot_type:    string; 
    @Field({nullable: null})  comms_service: string;  
    @Field({nullable: null})  dacc_ref:      string;  
    @Field({nullable: null})  account_no:    string;  
    @Field({nullable: null})  account_name:  string;  
    @Field({nullable: null})  depo_ref:      string;  
    @Field({nullable: null})  active_ind:    string; 
    @Field({nullable: null})  user_def:      string; 
    @Field({nullable: null})  description:   string;  
    @Field({nullable: null})  version_date:  Date;      
    @Field({nullable: null})  version_no:    number;      
    @Field({nullable: null})  version_user:  string;    
      }
@ArgsType()
export class  PartyNarrativeArgs {
  @Field({nullable: true })  party_ref:    string;
  @Field({nullable: true })  narr_type:    string;
}