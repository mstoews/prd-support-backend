import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Party {
  @Field({ nullable: true }) party_ref: string;
  @Field({ nullable: true }) party_type: string;
  @Field({ nullable: true }) party_short_name: string;
  @Field({ nullable: true }) party_long_name: string;
  @Field({ nullable: true }) party_extra_long_name: string;
  @Field({ nullable: true }) active_ind: string;
  @Field({ nullable: true }) version_date: Date;
  @Field(type => Int) version_no: number;
  @Field({ nullable: true }) version_user: string;
  @Field(type => [PartyAssoc], { nullable: 'items' })
  party_assoc: PartyAssoc[];
}

ObjectType()
export class ParentParty {
  @Field({ nullable: true }) party_ref: string;
  @Field({ nullable: true }) party_type: string;
  @Field({ nullable: true }) party_short_name: string;
  @Field({ nullable: true }) party_long_name: string;
  @Field({ nullable: true }) party_extra_long_name: string;
  @Field({ nullable: true }) active_ind: string;
  @Field({ nullable: true }) version_date: Date;
}

@ObjectType()
export class SimpleParty {
  @Field(type => [ParentParty]) party: ParentParty[];
  @Field(type => [PartyExtRef]) party_ext_ref: PartyExtRef[];
  @Field(type => [PartyAssoc]) party_assoc: PartyAssoc[];
}


@ObjectType()
export class PartyClassification {
  party_ref: string;
  class_type: string;
  class_code: string;
  user_def: string;
  description: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}


@ObjectType()
export class PartyExtRef {
  party_ref: string;
  party_ext_ref_type: string;
  party_ext_ref: string;
  user_def: string;
  description: string;
  version_date: Date;
  version_no: number;
  version_user: string;

}

@ObjectType()
export class PartyFlag {
  party_ref: string;
  flag_type: number;
  flag_code: string;
  user_def: string;
  description: string;
  @Field()
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartyInstr {
  party_ref: string;
  instr_type: string;
  instr_ref_type: string;
  instr_ref: string;
  user_def: string;
  description: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartyNarrative {
  party_ref: string;
  narr_type: string;
  narrative: string;
  user_def: string;
  description: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartyAssoc {
  party_ref: string;
  assoc_type: string;
  assoc_party_ref: string;
  user_def: string;
  description: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartySSI {
  party_ref: string;
  depot_alias: string;
  depot_descr: string;
  depot_type: string;
  comms_service: string;
  dacc_ref: string;
  account_no: string;
  account_name: string;
  depo_ref: string;
  active_ind: string;
  user_def: string;
  description: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartySwift {
  party_ref: string;
  company_name: string;
  branch_code: string;
  logical_term_id: string[];
  queue_mgr: string;
  incoming_queue: string;
  outgoing_queue: string;
  channel: string;
  host: string;
  port_number: number;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartyDate {
  party_ref: string;   /* Stores the company ref e.g. CMP4 */
  date_type: string;   /* DAST - Default Settle Date etc */
  date: string;   /* 1900-01-01 */
  time: string;   /* 07:00:00 */
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartyAddress {
  party_ref: string;     /* Stores the company ref e.g. CMP4 */
  addr_type: string;     /* HEAD - Default Settle Date etc */
  contact_name: string;
  contact_title: string;
  addr_line1: string;
  addr_line2: string;
  addr_line3: string;
  addr_line4: string;
  addr_line5: string;
  addr_line6: string;
  post_code: string;
  int_dial_code: string;
  phone_no: string;
  fax_no: string;
  email: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}


@ObjectType()
export class PartyTemplate {
  party_ref: string;
  template_party_ref: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class PartyAudit {
  party_ref: string;
  party_data: string;
  party_ext_ref_data: string;
  party_classification_data: string;
  party_flag_data: string;
  party_narrative_data: string;
  party_assoc_data: string;
  party_instr_data: string;
  party_ssi_data: string;
  party_date_data: string;
  party_address_data: string;
  party_template_data: string;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class ClassAssoc {
  party_ref: string;     /* Stores the company ref e.g. CMP4 */
  class_assoc_code: string;
  assoc_code_description: string;
  main_class: number;
  main_code: string;
  sub_class: number;
  sub_code: string;
  description: string;
  user_def: string;
  applied: boolean;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@ObjectType()
export class GlossCodes {
  class_value: number;
  code_value: string;
  code_short_desc: string;
  code_long_desc: string;
  active_ind: string;
}
