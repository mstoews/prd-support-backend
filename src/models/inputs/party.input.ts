import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PartyInput {
  @Field({ nullable: true }) party_ref: string;
  @Field({ nullable: true }) party_type: string;
  @Field({ nullable: true }) party_short_name: string;
  @Field({ nullable: true }) party_long_name: string;
  @Field({ nullable: true }) party_extra_long_name: string;
  @Field({ nullable: true }) active_ind: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class PartyClassInput {
  @Field({ nullable: false }) party_ref: string;
  @Field({ nullable: false }) class_type: string;
  @Field({ nullable: true }) class_code: string;
  @Field({ nullable: true }) user_def: string;
  @Field({ nullable: true }) description: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class PartyExtRefInput {
  @Field({ nullable: false }) party_ref: string;
  @Field({ nullable: false }) party_ext_ref_type: string;
  @Field({ nullable: true }) party_ext_ref: string;
  @Field({ nullable: true }) user_def: string;
  @Field({ nullable: true }) description: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class PartyFlagInput {
  @Field({
    nullable: true
  }) party_ref: string;
  @Field({ nullable: true }) flag_type: number;
  @Field({ nullable: true }) flag_code: string;
  @Field({ nullable: true }) user_def: string;
  @Field({ nullable: true }) description: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class PartyInstrInput {
  @Field({ nullable: true }) party_ref: string;
  @Field({ nullable: true }) instr_ref: string;
  @Field({ nullable: true }) instr_type: string;
  @Field({ nullable: true }) instr_ref_type: string;
  @Field({ nullable: true }) user_def: string;
  @Field({ nullable: true }) description: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}


@InputType()
export class PartyNarrativeInput {
  @Field({ nullable: true }) party_ref: string;
  @Field({ nullable: true }) narr_type: string;
  @Field({ nullable: true }) narrative: string;
  @Field({ nullable: true }) user_def: string;
  @Field({ nullable: true }) description: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class PartyAssocInput {
  @Field({ nullable: false }) party_ref: string;
  @Field({ nullable: false }) assoc_type: string;
  @Field({ nullable: null }) assoc_party_ref: string;
  @Field({ nullable: null }) user_def: string;
  @Field({ nullable: null }) description: string;
  @Field({ nullable: null }) version_date: Date;
  @Field({ nullable: null }) version_no: number;
  @Field({ nullable: null }) version_user: string;
}

@InputType()
export class PartySSIInput {
  @Field({ nullable: null }) party_ref: string;
  @Field({ nullable: null }) depot_alias: string;
  @Field({ nullable: null }) depot_descr: string;
  @Field({ nullable: null }) depot_type: string;
  @Field({ nullable: null }) ccy: string;
  @Field({ nullable: null }) comms_service: string;
  @Field({ nullable: null }) dacc_ref: string;
  @Field({ nullable: null }) account_no: string;
  @Field({ nullable: null }) account_name: string;
  @Field({ nullable: null }) depo_ref: string;
  @Field({ nullable: null }) active_ind: string;
  @Field({ nullable: null }) user_def: string;
  @Field({ nullable: null }) description: string;
  @Field({ nullable: null }) version_date: Date;
  @Field({ nullable: null }) version_no: number;
  @Field({ nullable: null }) version_user: string;
}

@InputType()
export class PartySwiftInput {
  @Field({ nullable: false }) party_ref: string;
  @Field({ nullable: false }) company_name: string;
  @Field({ nullable: false }) branch_code: string;
  @Field(() => [String]) logical_term_id: string[];
  @Field({ nullable: false }) queue_mgr: string;
  @Field({ nullable: false }) incoming_queue: string;
  @Field({ nullable: false }) outgoing_queue: string;
  @Field({ nullable: false }) channel: string;
  @Field({ nullable: false }) host: string;
  @Field({ nullable: false }) port_number: number;
  @Field({ nullable: false }) version_date: Date;
  @Field({ nullable: false }) version_no: number;
  @Field({ nullable: false }) version_user: string;
}

@InputType()
export class PartyTemplateInput {
  @Field({ nullable: false }) party_ref: string;
  @Field({ nullable: false }) template_party_ref: string;
  @Field({ nullable: false }) party_short_name: string;
  @Field({ nullable: false }) party_long_name: string;
  @Field({ nullable: false }) version_date: Date;
  @Field({ nullable: false }) version_no: number;
  @Field({ nullable: false }) version_user: string;
}

@InputType()
export class PartyDateInput {
  @Field({ nullable: false }) party_ref: string;   /* Stores the company ref e.g. CMP4 */
  @Field({ nullable: false }) date_type: string;   /* DAST - Default Settle Date etc */
  @Field({ nullable: true }) date: string;   /* 1900-01-01 */
  @Field({ nullable: true }) time: string;   /* 07:00:00 */
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class PartyAddressInput {
  @Field({ nullable: false }) party_ref: string;     /* Stores the company ref e.g. CMP4 */
  @Field({ nullable: false }) addr_type: string;     /* HEAD - Default Settle Date etc */
  @Field({ nullable: true }) contact_name: string;
  @Field({ nullable: true }) contact_title: string;
  @Field({ nullable: true }) addr_line1: string;
  @Field({ nullable: true }) addr_line2: string;
  @Field({ nullable: true }) addr_line3: string;
  @Field({ nullable: true }) addr_line4: string;
  @Field({ nullable: true }) addr_line5: string;
  @Field({ nullable: true }) addr_line6: string;
  @Field({ nullable: true }) post_code: string;
  @Field({ nullable: true }) int_dial_code: string;
  @Field({ nullable: true }) phone_no: string;
  @Field({ nullable: true }) fax_no: string;
  @Field({ nullable: true }) email: string;
  @Field({ nullable: true }) version_date: Date;
  @Field({ nullable: true }) version_no: number;
  @Field({ nullable: true }) version_user: string;
}

@InputType()
export class ClassAssocInput {
  @Field({ nullable: false }) party_ref: string;     /* Stores the company ref e.g. CMP4 */
  @Field({ nullable: false }) class_assoc_code: string;
  @Field({ nullable: false }) code_type: string;
  @Field({ nullable: false }) class_1: number;
  @Field({ nullable: false }) code_1: string;
  @Field({ nullable: false }) class_2: number;
  @Field(() => [String]) code_2: string[];
  @Field({ nullable: false }) applied: boolean;
  @Field({ nullable: false }) version_date: Date;
  @Field({ nullable: false }) version_no: number;
  @Field({ nullable: false }) version_user: string;
}

@InputType()
export class NettingInput {
  @Field({ nullable: false }) party_ref: string;
  @Field({ nullable: false }) net_driver: string;
  @Field({ nullable: false }) settle_code: string;
  @Field({ nullable: false }) transaction_type: string;
  @Field({ nullable: false }) trade_group: number;
  @Field({ nullable: false }) late_rule: string;
  @Field({ nullable: false }) net_schedule_code: string;
  @Field({ nullable: false }) date_type: string;
  @Field({ nullable: false }) buy_and_sell_flag: string;
  @Field({ nullable: false }) net_party_ref: string;
  @Field({ nullable: false }) net_book: string;
  @Field({ nullable: false }) override_net_book: string;
  @Field({ nullable: false }) secondary_party: string;
  @Field({ nullable: false }) settle_terms: string;
  @Field({ nullable: false }) operation_type: string;
  @Field({ nullable: false }) net_primary: string;
  @Field({ nullable: false }) primary_comp_service: string;
  @Field({ nullable: false }) primary_secp_service: string;
  @Field({ nullable: false }) net_secondary: string;
  @Field({ nullable: false }) secondary_comp_service: string;
  @Field({ nullable: false }) secondary_secp_service: string;
  @Field({ nullable: false }) primary_instr: string;
  @Field({ nullable: false }) primary_comp_alias: string;
  @Field({ nullable: false }) primary_depot_type: string;
  @Field({ nullable: false }) primary_party_ref: string;
  @Field({ nullable: false }) primary_secp_alias: string;
  @Field({ nullable: false }) settle_instr: string;
  @Field({ nullable: false }) secondary_comp_alias: string;
  @Field({ nullable: false }) secondary_depot_type: string;
  @Field({ nullable: false }) secondary_party_ref: string;
  @Field({ nullable: false }) secondary_secp_alias: string;
  @Field({ nullable: false }) market_party: string;
  @Field({ nullable: false }) start_date_type: string;
  @Field({ nullable: false }) start_offset_ind: string;
  @Field({ nullable: false }) start_offset_code: string;
  @Field({ nullable: false }) end_date_type: string;
  @Field({ nullable: false }) end_offset_ind: string;
  @Field({ nullable: false }) end_offset_code: string;
  @Field({ nullable: false }) net_cash_when_zero_stock: string;
  @Field({ nullable: false }) split_buy_sell: string;
  @Field({ nullable: false }) version_date: Date;
  @Field({ nullable: false }) version_no: number;
  @Field({ nullable: false }) version_user: string;
}