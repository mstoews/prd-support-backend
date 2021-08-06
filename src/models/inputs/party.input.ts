import { InputType, Field, ArgsType } from '@nestjs/graphql';

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
  @Field({ nullable: false }) assoc_code_description: string;
  @Field({ nullable: false }) main_class: number;
  @Field({ nullable: false }) main_code: string;
  @Field({ nullable: false }) sub_class: number;
  @Field({ nullable: false }) sub_code: string;
  @Field({ nullable: false }) description: string;
  @Field({ nullable: false }) user_def: string;
  @Field({ nullable: false }) applied: boolean;
  @Field({ nullable: false }) version_date: Date;
  @Field({ nullable: false }) version_no: number;
  @Field({ nullable: false }) version_user: string;
}

@InputType()
export class ClassAssocStepperInput {
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
