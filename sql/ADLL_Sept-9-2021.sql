
create type "Role" as enum ('ADMIN', 'TEAMOPERATOR', 'TEAMSUPERVISOR');

alter type "Role" owner to admin;

create table if not exists "User"
(
	userid text not null
		constraint "User_pkey"
			primary key,
	"createdAt" timestamp(3) default CURRENT_TIMESTAMP not null,
	"updatedAt" timestamp(3) not null,
	email text not null,
	password text not null,
	firstname text,
	lastname text,
	role "Role" not null
);

alter table "User" owner to admin;

create table if not exists class_assoc
(
	party_ref text not null,
	class_assoc_code text not null,
	code_type text not null,
	class_1 integer not null,
	code_1 text not null,
	class_2 integer not null,
	code_2 text[],
	applied boolean not null,
	version_date timestamp(3),
	version_no integer not null,
	version_user text not null,
	constraint class_assoc_pkey
		primary key (party_ref, class_assoc_code, code_type, class_1, code_1, class_2)
);

alter table class_assoc owner to admin;

create table if not exists party_data_pushed
(
	party_ref text not null,
	environment text not null,
	party_template_data text,
	party_class_assoc_data text,
	party_netting_data text,
	version_date timestamp(3),
	version_user text not null,
	constraint party_data_pushed_pkey
		primary key (party_ref, environment)
);

alter table party_data_pushed owner to admin;

create table if not exists environment
(
	environment text not null
		constraint environment_pkey
			primary key,
	description text,
	sst_nestjsserver_url text,
	sst_pythonserver_url text,
	sst_springserver_url text,
	active text
);

alter table environment owner to admin;

create table if not exists gloss_codes
(
	class_value integer not null,
	code_value text not null,
	code_short_desc text,
	code_long_desc text,
	active_ind text,
	constraint gloss_codes_pkey
		primary key (class_value, code_value)
);

alter table gloss_codes owner to admin;

create table if not exists instr
(
	instr_ref text not null
		constraint instr_pkey
			primary key,
	instr_type text,
	template_ref text,
	instr_short_name text,
	instr_long_name text,
	active_ind text,
	issu_date timestamp(3),
	issu_price double precision,
	matu_date timestamp(3),
	matu_price double precision,
	denom_ccy text,
	price_dec double precision,
	price_div double precision,
	price_mul double precision,
	price_type text,
	tick_value double precision,
	book_ref text,
	market_ref text,
	lot_size integer,
	qty_dec_places integer,
	version_date timestamp(3),
	version_no integer,
	version_user text
);

alter table instr owner to admin;

create table if not exists instr_accrual
(
	instr_ref text not null,
	seq_no integer not null,
	accr_basis text,
	amort_flag text,
	capi_flag text,
	paym_ccy text,
	start_accr_date timestamp(3),
	first_paym_date timestamp(3),
	last_paym_date timestamp(3),
	frn_flag text,
	neg_flag text,
	freq_rule text,
	freq_unit integer,
	cal_code text,
	date_rule text,
	eom_flag text,
	cpon_rate double precision,
	rnd_rule text,
	rdat_offset integer,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint instr_accrual_pkey
		primary key (instr_ref, seq_no)
);

alter table instr_accrual owner to admin;

create table if not exists instr_classification
(
	instr_ref text not null,
	class_type text not null,
	class_code text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint instr_classification_pkey
		primary key (instr_ref, class_type)
);

alter table instr_classification owner to admin;

create table if not exists instr_date
(
	instr_ref text not null,
	date_type text not null,
	date timestamp(3),
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint instr_date_pkey
		primary key (instr_ref, date_type)
);

alter table instr_date owner to admin;

create table if not exists instr_ext_ref
(
	instr_ref text not null,
	instr_ext_ref_type text not null,
	instr_ext_ref text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint instr_ext_ref_pkey
		primary key (instr_ref, instr_ext_ref_type)
);

alter table instr_ext_ref owner to admin;

create table if not exists instr_flag
(
	instr_ref text not null,
	flag_type integer not null,
	flag_code text not null,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint instr_flag_pkey
		primary key (instr_ref, flag_type, flag_code)
);

alter table instr_flag owner to admin;

create table if not exists instr_narrative
(
	instr_ref text not null,
	narr_type text not null,
	narrative text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint instr_narrative_pkey
		primary key (instr_ref, narr_type)
);

alter table instr_narrative owner to admin;

create table if not exists kb_task
(
	task_id text not null
		constraint kb_task_pkey
			primary key,
	party_ref text,
	title text,
	status text,
	summary text,
	type text,
	priority text,
	tags text,
	estimate integer,
	assignee text,
	rankid integer,
	color text,
	classname text
);

alter table kb_task owner to admin;

create table if not exists kb_subtask
(
	task_id text not null,
	subid text not null,
	"desc" text,
	status text,
	summary text,
	type text,
	estimate integer,
	constraint kb_subtask_pkey
		primary key (task_id, subid)
);

alter table kb_subtask owner to admin;

create table if not exists kb_priority
(
	priority text not null
		constraint kb_priority_pkey
			primary key,
	description text,
	updatedte timestamp(3),
	updateusr text
);

alter table kb_priority owner to admin;

create table if not exists kb_status
(
	status text not null
		constraint kb_status_pkey
			primary key,
	description text,
	updatedte timestamp(3),
	updateusr text
);

alter table kb_status owner to admin;

create table if not exists kb_type
(
	type text not null
		constraint kb_type_pkey
			primary key,
	description text,
	updatedte timestamp(3),
	updateusr text
);

alter table kb_type owner to admin;

create table if not exists party
(
	party_ref text not null
		constraint party_pkey
			primary key,
	party_type text,
	party_short_name text,
	party_long_name text,
	party_extra_long_name text,
	active_ind text,
	version_date timestamp(3),
	version_no integer,
	version_user text
);

alter table party owner to admin;

create table if not exists party_addr
(
	party_ref text not null,
	addr_type text not null,
	contact_name text not null,
	contact_title text not null,
	addr_line1 text not null,
	addr_line2 text not null,
	addr_line3 text not null,
	addr_line4 text not null,
	addr_line5 text not null,
	addr_line6 text not null,
	post_code text not null,
	int_dial_code text not null,
	phone_no text not null,
	fax_no text not null,
	email text not null,
	version_date timestamp(3),
	version_no integer not null,
	version_user text not null,
	constraint party_addr_pkey
		primary key (party_ref, addr_type)
);

alter table party_addr owner to admin;

create table if not exists party_assoc
(
	party_ref text not null,
	assoc_type text not null,
	assoc_party_ref text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint party_assoc_pkey
		primary key (party_ref, assoc_type)
);

alter table party_assoc owner to admin;

create table if not exists party_audit
(
	party_ref text not null,
	party_data text,
	party_ext_ref_data text,
	party_classification_data text,
	party_flag_data text,
	party_narrative_data text,
	party_assoc_data text,
	party_instr_data text,
	party_ssi_data text,
	party_date_data text,
	party_address_data text,
	party_template_data text,
	party_class_assoc_data text,
	party_netting_data text,
	version_date timestamp(3),
	version_no integer not null,
	version_user text,
	constraint party_audit_pkey
		primary key (party_ref, version_no)
);

alter table party_audit owner to admin;

create table if not exists party_classification
(
	party_ref text not null,
	class_type text not null,
	class_code text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint party_classification_pkey
		primary key (party_ref, class_type)
);

alter table party_classification owner to admin;

create table if not exists party_date
(
	party_ref text not null,
	date_type text not null,
	date text not null,
	time text not null,
	version_date timestamp(3) not null,
	version_no integer not null,
	version_user text not null,
	constraint party_date_pkey
		primary key (party_ref, date_type)
);

alter table party_date owner to admin;

create table if not exists party_ext_ref
(
	party_ref text not null,
	party_ext_ref_type text not null,
	party_ext_ref text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint party_ext_ref_pkey
		primary key (party_ref, party_ext_ref_type)
);

alter table party_ext_ref owner to admin;

create table if not exists party_flag
(
	party_ref text not null,
	flag_type integer not null,
	flag_code text not null,
	user_def text,
	description text,
	version_date timestamp(3) default CURRENT_TIMESTAMP,
	version_no integer,
	version_user text,
	constraint party_flag_pkey
		primary key (party_ref, flag_type, flag_code)
);

alter table party_flag owner to admin;

create table if not exists party_instr
(
	party_ref text not null,
	instr_type text not null,
	instr_ref_type text,
	instr_ref text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint party_instr_pkey
		primary key (party_ref, instr_type)
);

alter table party_instr owner to admin;

create table if not exists party_narrative
(
	party_ref text not null,
	narr_type text not null,
	narrative text,
	user_def text,
	description text,
	version_date timestamp(3) default CURRENT_TIMESTAMP,
	version_no integer default 1,
	version_user text,
	constraint party_narrative_pkey
		primary key (party_ref, narr_type)
);

alter table party_narrative owner to admin;

create table if not exists party_ssi
(
	party_ref text not null,
	depot_alias text not null,
	depot_descr text,
	depot_type text,
	ccy text,
	comms_service text,
	dacc_ref text,
	account_no text,
	account_name text,
	depo_ref text,
	active_ind text,
	user_def text,
	description text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint party_ssi_pkey
		primary key (party_ref, depot_alias)
);

alter table party_ssi owner to admin;

create table if not exists party_swift_router
(
	party_ref text not null
		constraint party_swift_router_pkey
			primary key,
	company_name text not null,
	logical_term_id text[],
	queue_mgr text not null,
	incoming_queue text not null,
	outgoing_queue text not null,
	channel text not null,
	host text not null,
	port_number integer not null,
	version_date timestamp(3) not null,
	version_no integer not null,
	version_user text not null,
	branch_code text
);

alter table party_swift_router owner to admin;

create table if not exists party_template
(
	party_ref text not null
		constraint party_template_pkey
			primary key,
	template_party_ref text not null,
	party_short_name text not null,
	party_long_name text not null,
	version_date timestamp(3),
	version_no integer,
	version_user text
);

alter table party_template owner to admin;

create table if not exists gloss_scheduler
(
	msg_type integer not null,
	event_ref text not null,
	database_type text,
	database_code text not null,
	sql_db_code text,
	bus_day text,
	holiday_id text,
	frequency_unit text,
	frequency_interval integer,
	frequency_start_time timestamp(3),
	frequency_end_time timestamp(3),
	due_date_time timestamp(3) not null,
	start_by_unit text,
	start_by_interval integer,
	end_by_interval integer,
	use_current_date text,
	active_ind_p2k text,
	start_by_time timestamp(3),
	end_by_time timestamp(3),
	batch_size integer,
	supercede text,
	dst_region_code text,
	version_no integer,
	version_date timestamp(3),
	version_user text,
	constraint gloss_scheduler_pkey
		primary key (msg_type, event_ref, due_date_time, database_code)
);

alter table gloss_scheduler owner to admin;

create table if not exists gloss_netting
(
	party_ref text not null,
	net_driver text not null,
	settle_code text not null,
	transaction_type text not null,
	trade_group integer,
	late_rule text,
	net_schedule_code text,
	date_type text,
	buy_and_sell_flag text,
	net_party_ref text,
	net_book text,
	override_net_book text,
	secondary_party text,
	settle_terms text,
	operation_type text,
	net_primary text,
	primary_comp_service text,
	primary_secp_service text,
	net_secondary text,
	secondary_comp_service text,
	secondary_secp_service text,
	primary_instr text,
	primary_comp_alias text,
	primary_depot_type text,
	primary_party_ref text,
	primary_secp_alias text,
	settle_instr text,
	secondary_comp_alias text,
	secondary_depot_type text,
	secondary_party_ref text,
	secondary_secp_alias text,
	market_party text,
	start_date_type text,
	start_offset_ind text,
	start_offset_code text,
	end_date_type text,
	end_offset_ind text,
	end_offset_code text,
	net_cash_when_zero_stock text,
	split_buy_sell text,
	version_date timestamp(3),
	version_no integer,
	version_user text,
	constraint gloss_netting_pkey
		primary key (party_ref, net_driver, settle_code, transaction_type)
);

alter table gloss_netting owner to admin;

