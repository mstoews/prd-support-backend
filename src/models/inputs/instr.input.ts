import { InputType, Field, ArgsType } from '@nestjs/graphql';

@InputType()
export class InstrInput {
  @Field({ nullable: false }) instr_ref:             string;  
  @Field({ nullable: false }) instr_type:            string;
  @Field({ nullable: true })  template_ref:          string;  
  @Field({ nullable: true })  instr_short_name:      string;
  @Field({ nullable: true })  instr_long_name:       string;
  @Field({ nullable: true })  active_ind:            string;
  @Field({ nullable: true })  issu_date:             Date;
  @Field({ nullable: true })  issu_price:            number;
  @Field({ nullable: true })  matu_date:             Date;
  @Field({ nullable: true })  matu_price:            number;
  @Field({ nullable: true })  denom_ccy:             string;
  @Field({ nullable: true })  price_dec:             number;
  @Field({ nullable: true })  price_div:             number;
  @Field({ nullable: true })  price_mul:             number;
  @Field({ nullable: true })  price_type:            string;
  @Field({ nullable: true })  tick_value:            number;
  @Field({ nullable: true })  book_ref:              string;
  @Field({ nullable: true })  market_ref:            string;
  @Field({ nullable: true })  lot_size:              number;
  @Field({ nullable: true })  qty_dec_places:        number;
  @Field({ nullable: true })  version_date:          Date;
  @Field({ nullable: true })  version_no:            number;
  @Field({ nullable: true })  version_user:          string;
}

@InputType()
export class InstrClassInput {
  @Field({ nullable: false }) instr_ref:             string;  
  @Field({ nullable: false }) class_type:            string;
  @Field({ nullable: true })  class_code:            string;
  @Field({ nullable: true })  user_def:              string;
  @Field({ nullable: true })  description:           string;
  @Field({ nullable: true })  version_date:          Date;
  @Field({ nullable: true })  version_no:            number;
  @Field({ nullable: true })  version_user:          string;
}

@InputType()
export class InstrExtRefInput {
  @Field({nullable: false }) instr_ref:              string; 
  @Field({nullable: false }) instr_ext_ref_type:     string;
  @Field({nullable: true })  instr_ext_ref:          string;
  @Field({nullable: true })  user_def:               string;
  @Field({nullable: true })  description:            string;
  @Field({nullable: true })  version_date:           Date;
  @Field({nullable: true })  version_no:             number;
  @Field({nullable: true })  version_user:           string;
}
  
@InputType()
export class InstrFlagInput {
  @Field({nullable: false }) instr_ref:              string;
  @Field({nullable: false }) flag_type:              number;
  @Field({nullable: true })  flag_code:              string;
  @Field({nullable: true })  user_def:               string;
  @Field({nullable: true })  description:            string;
  @Field({nullable: true })  version_date:           Date;
  @Field({nullable: true })  version_no:             number;
  @Field({nullable: true })  version_user:           string;
}
  
@InputType()
export class InstrNarrativeInput {
  @Field({nullable: false }) instr_ref:              string;
  @Field({nullable: false }) narr_type:              string;
  @Field({nullable: true })  narrative:              string;
  @Field({nullable: true })  user_def:               string;
  @Field({nullable: true })  description:            string;
  @Field({nullable: true })  version_date:           Date;
  @Field({nullable: true })  version_no:             number;
  @Field({nullable: true })  version_user:           string;
  }

@InputType()
export class InstrDateInput {
  @Field({nullable: false }) instr_ref:              string;
  @Field({nullable: false }) date_type:              string;
  @Field({nullable: true })  date:                   string;
  @Field({nullable: true })  user_def:               string;
  @Field({nullable: true })  description:            string;
  @Field({nullable: true })  version_date:           Date;
  @Field({nullable: true })  version_no:             number;
  @Field({nullable: true })  version_user:           string;
  }

@InputType()
export class InstrAccrualInput {
  @Field({nullable: null})   instr_ref:              string;
  @Field({nullable: null})   seq_no:                 number;
  @Field({nullable: true})   accr_basis:             string; /* JGB or UST etc */
  @Field({nullable: true})   amort_flag:             string; /* Y or N */
  @Field({nullable: true})   capi_flag:              string; /* Y or N */
  @Field({nullable: true})   paym_ccy:               string;
  @Field({nullable: true})   start_accr_date:        Date;
  @Field({nullable: true})   first_paym_date:        Date;
  @Field({nullable: true})   last_paym_date:         Date;
  @Field({nullable: true})   frn_flag:               string; /* Y or N */
  @Field({nullable: true})   neg_flag:               string; /* Y or N */
  @Field({nullable: true})   freq_rule:              string; /* D, M or Y */
  @Field({nullable: true})   freq_unit:              number;
  @Field({nullable: true})   cal_code:               string; /* JPD, HKE etc */
  @Field({nullable: true})   date_rule:              string; /* FIX etc */
  @Field({nullable: true})   eom_flag:               string; /* Y or N */
  @Field({nullable: true})   cpon_rate:              number;
  @Field({nullable: true})   rnd_rule:               string; /* RND2 or RND0 etc */
  @Field({nullable: true})   rdat_offset:            number;
  @Field({nullable: null})   user_def:               string;
  @Field({nullable: null})   description:            string;
  @Field({nullable: null})   version_date:           Date;      
  @Field({nullable: null})   version_no:             number;      
  @Field({nullable: null})   version_user:           string;   
}

@ArgsType()
export class InstrNarrativeArgs {
  @Field({nullable: true })  instr_ref:              string;
  @Field({nullable: true })  narr_type:              string;
}