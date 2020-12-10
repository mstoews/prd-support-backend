/*  +++begin copyright+++ *******************************  */
/*                                                         */
/*  BROADRIDGE CONFIDENTIAL INFORMATION: FIRST CLASS       */
/*  COPYRIGHT (c) Broadridge (Japan) Limited               */
/*                                                         */
/*  This  program  contains confidential and proprietary   */
/*  information  of  Broadridge (Japan) Ltd., and any      */
/*  reproduction,  disclosure, or use in whole or in part  */
/*  is   expressly   prohibited,   except   as   may   be  */
/*  specifically authorized by prior written agreement or  */
/*  permission of Broadridge, Purveyors of Fine Software.  */
/*                                                         */
/*  +++end copyright+++ *********************************  */

/*                                                                            */
/*                                                                            */
/*                                                                            */
/* NAME        : instr.model.ts                                               */
/*                                                                            */
/* DESCRIPTION : A module to define the instrument model for graphql          */
/*                                                                            */
/* AMENDMENT HISTORY:                                                         */
/*                                                                            */
/*  Version no.    Description                      Author         Date       */
/*                                                                            */
/*  brtk04044  Written by                           James Marsden  04-Nov-2020*/
/*                                                  (RJM)                     */
/*                                                                            */

import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Instr {
    @Field ({nullable:false}) instr_ref:              string;
    @Field ({nullable:false}) instr_type:             string;
    @Field ({nullable:false}) template_ref:           string;
    @Field ({nullable:false}) instr_short_name:       string;
    @Field ({nullable:false}) instr_long_name:        string;
    @Field ({nullable:false}) active_ind:             string;
    @Field ({nullable:true})  issu_date:              Date;
    @Field ({nullable:true})  issu_price:             string;
    @Field ({nullable:true})  matu_date:              Date;
    @Field ({nullable:true})  matu_price:             string;
    @Field ({nullable:false}) denom_ccy:              string;
    @Field ({nullable:false}) price_dec:              number;
    @Field ({nullable:false}) price_div:              number;
    @Field ({nullable:false}) price_mul:              number;
    @Field ({nullable:false}) price_type:             string;
    @Field ({nullable:false}) tick_value:             number;
    @Field ({nullable:true})  book_ref:               string;
    @Field ({nullable:true})  market_ref:             string;
    @Field ({nullable:false}) lot_size:               number;
    @Field ({nullable:false}) qty_dec_places:         number;
    @Field ({nullable:false}) version_date:           Date;
    @Field ({nullable:false}) version_no:             number;
    @Field ({nullable:false}) version_user:           string;
    @Field(type => [InstrClassification])
    classes: InstrClassification[];
}

@ObjectType()
export class InstrClassification {
    @Field ({nullable:false}) instr_ref:              string;  
    @Field ({nullable:false}) class_type:             string;
    @Field ({nullable:true})  class_code:             string;
    @Field ({nullable:false}) user_def:               string;
    @Field ({nullable:false}) description:            string;
    @Field ({nullable:false}) version_date:           Date;
    @Field ({nullable:false}) version_no:             number;
    @Field ({nullable:false}) version_user:           string;
}
 
@ObjectType()
export class InstrExtRef {
    @Field ({nullable:false}) instr_ref:              string; 
    @Field ({nullable:false}) instr_ext_ref_type:     string;
    @Field ({nullable:true})  instr_ext_ref:          string;
    @Field ({nullable:false}) user_def:               string;
    @Field ({nullable:false}) description:            string;
    @Field ({nullable:false}) version_date:           Date;
    @Field ({nullable:false}) version_no:             number;
    @Field ({nullable:false}) version_user:           string;
}
  
@ObjectType()
export class  InstrFlag {
    @Field ({nullable:false}) instr_ref:              string;
    @Field ({nullable:false}) flag_type:              number;
    @Field ({nullable:false}) flag_code:              string;
    @Field ({nullable:false}) user_def:               string;
    @Field ({nullable:false}) description:            string;
    @Field ({nullable:false}) version_date:           Date;
    @Field ({nullable:false}) version_no:             number;
    @Field ({nullable:false}) version_user:           string;
}
  
@ObjectType()
export class  InstrNarrative {
    @Field ({nullable:false}) instr_ref:              string;
    @Field ({nullable:false}) narr_type:              string;
    @Field ({nullable:false}) narrative:              string;
    @Field ({nullable:false}) user_def:               string;
    @Field ({nullable:false}) description:            string;
    @Field ({nullable:false}) version_date:           Date;
    @Field ({nullable:false}) version_no:             number;
    @Field ({nullable:false}) version_user:           string;
}

@ObjectType()
export class  InstrDate {
    @Field ({nullable:false}) instr_ref:              string;
    @Field ({nullable:false}) date_type:              string;
    @Field ({nullable:false}) date:                   Date;
    @Field ({nullable:false}) user_def:               string;
    @Field ({nullable:false}) description:            string;
    @Field ({nullable:false}) version_date:           Date;      
    @Field ({nullable:false}) version_no:             number;      
    @Field ({nullable:false}) version_user:           string;   
}

@ObjectType()
export class  InstrAccrual {
    @Field ({nullable:false}) instr_ref:              string;
    @Field ({nullable:false}) seq_no:                 number;
    @Field ({nullable:false}) accr_basis:             string; /* JGB or UST etc */
    @Field ({nullable:false}) amort_flag:             string; /* Y or N */
    @Field ({nullable:false}) capi_flag:              string; /* Y or N */
    @Field ({nullable:false}) paym_ccy:               string;
    @Field ({nullable:false}) start_accr_date:        Date;
    @Field ({nullable:false}) first_paym_date:        Date;
    @Field ({nullable:false}) last_paym_date:         Date;
    @Field ({nullable:false}) frn_flag:               string; /* Y or N */
    @Field ({nullable:false}) neg_flag:               string; /* Y or N */
    @Field ({nullable:false}) freq_rule:              string; /* D, M or Y */
    @Field ({nullable:false}) freq_unit:              number;
    @Field ({nullable:false}) cal_code:               string; /* JPD, HKE etc */
    @Field ({nullable:false}) date_rule:              string; /* FIX etc */
    @Field ({nullable:false}) eom_flag:               string; /* Y or N */
    @Field ({nullable:true})  cpon_rate:              string; /* Can be null e.g FRN */
    @Field ({nullable:false}) rnd_rule:               string; /* RND2 or RND0 etc */
    @Field ({nullable:false}) rdat_offset:            number; /* Usually 1 day before */
    @Field ({nullable:false}) user_def:               string;
    @Field ({nullable:false}) description:            string;
    @Field ({nullable:false}) version_date:           Date;      
    @Field ({nullable:false}) version_no:             number;      
    @Field ({nullable:false}) version_user:           string;   
}

