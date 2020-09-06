import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PartyInput {
  @Field({ nullable: true })
  party_ref:             string;  
  @Field({ nullable: true })  
  party_type:            string;
  @Field({ nullable: true })  
  party_short_name:      string;
  @Field({ nullable: true })
  party_long_name:       string;
  @Field({ nullable: true })
  party_extra_long_name: string;
  @Field({ nullable: true })
  active_ind:            string;
  @Field({ nullable: true })
  version_date:          Date;
  @Field({ nullable: true })
  version_no:            number;
  @Field({ nullable: true })
  version_user:          string;
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
  @Field({nullable: true })  instr_type:     string;
  @Field({nullable: true })  instr_ref_type: string;
  @Field({nullable: true })  instr_ref:      string;
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
  

