import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Party {
  party_ref:             string;    
  party_type:            string;  
  party_short_name:      string;
  party_long_name:       string;
  party_extra_long_name: string;
  active_ind:            string;
  version_date:          Date;
  version_no:            string;
  version_user:          User;
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
    version_user: User;
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
    version_user:       User;
  }
  
@ObjectType()
export class  PartyFlag {
    party_ref:    string;
    flag_type:    number;
    flag_code:    string;
    user_def:     string;
    description:  string;
    version_date: Date;
    version_no:   number;
    version_user: User;
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
    version_user:   User;
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
    version_user: User;
  }
  