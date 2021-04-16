create table instr
(
	instr_ref varchar(12) not null
		constraint instr_pkey
			primary key,
	instr_type varchar(4),
	template_ref varchar(12),
	instr_short_name varchar(50),
	instr_long_name varchar(40),
	active_ind varchar(1),
	issu_date date,
	issu_price double precision,
	matu_date date,
	matu_price double precision,
	denom_ccy varchar(12),
	price_dec double precision,
	price_div double precision,
	price_mul double precision,
	price_type varchar(4),
	tick_value double precision,
	book_ref varchar(12),
	market_ref varchar(12),
	lot_size integer,
	qty_dec_places integer,
	version_date date,
	version_no integer,
	version_user varchar(12)
);

alter table instr owner to admin;

create table instr_classification
(
	instr_ref varchar(12) not null,
	class_type varchar(4) not null,
	class_code varchar(4),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint instr_classification_pkey
		primary key (instr_ref, class_type)
);

alter table instr_classification owner to admin;

create table instr_ext_ref
(
	instr_ref varchar(12) not null,
	instr_ext_ref_type varchar(4) not null,
	instr_ext_ref varchar(20),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint instr_ext_ref_pkey
		primary key (instr_ref, instr_ext_ref_type)
);

alter table instr_ext_ref owner to admin;

create table instr_flag
(
	instr_ref varchar(12) not null,
	flag_type integer not null,
	flag_code varchar(4) not null,
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint instr_flag_pkey
		primary key (instr_ref, flag_type, flag_code)
);

alter table instr_flag owner to admin;

create table instr_narrative
(
	instr_ref varchar(12) not null,
	narr_type varchar(4) not null,
	narrative varchar(255),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint instr_narrative_pkey
		primary key (instr_ref, narr_type)
);

alter table instr_narrative owner to admin;

create table instr_date
(
	instr_ref varchar(12) not null,
	date_type varchar(4) not null,
	date date,
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint instr_date_pkey
		primary key (instr_ref, date_type)
);

alter table instr_date owner to admin;

create table instr_accrual
(
	instr_ref varchar(12) not null,
	seq_no integer not null,
	accr_basis varchar(4),
	amort_flag varchar(1),
	capi_flag varchar(1),
	paym_ccy varchar(3),
	start_accr_date date,
	first_paym_date date,
	last_paym_date date,
	frn_flag varchar(1),
	neg_flag varchar(1),
	freq_rule varchar(1),
	freq_unit integer,
	cal_code varchar(4),
	date_rule varchar(4),
	eom_flag varchar(1),
	cpon_rate double precision,
	rnd_rule varchar(4),
	rdat_offset integer,
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint instr_accrual_pkey
		primary key (instr_ref, seq_no)
);

alter table instr_accrual owner to admin;

create table environment
(
	environment varchar(10) not null
		constraint environment_pkey
			primary key,
	image varchar(255),
	description varchar(30),
	usr varchar(15),
	active char
);

alter table environment owner to admin;

create table kanbantask
(
	id varchar(8) not null
		constraint kanban_pkey
			primary key,
	title varchar(40),
	status varchar(10),
	summary varchar(60),
	type varchar(20),
	priority varchar(6),
	tags varchar(20),
	estimate integer,
	assignee varchar(20),
	rankid integer,
	color varchar(7),
	classname varchar(50)
);

alter table kanbantask owner to admin;

create table kb_status
(
	status varchar(10) not null
		constraint kb_status_pkey
			primary key,
	updatedte date,
	updateusr varchar(10)
);

alter table kb_status owner to admin;

create table kb_type
(
	type varchar(10) not null
		constraint kb_type_pkey
			primary key,
	updatedte date,
	updateusr varchar(10)
);

alter table kb_type owner to admin;

create table kb_priority
(
	priority varchar(6) not null
		constraint kb_priority_key
			primary key,
	updatedte date,
	updateusr varchar(10)
);

alter table kb_priority owner to admin;

create table party
(
	party_ref varchar(12) not null
		constraint party_pkey
			primary key,
	party_type varchar(4),
	party_short_name varchar(20),
	party_long_name varchar(40),
	party_extra_long_name varchar(40),
	active_ind varchar(1),
	version_date date,
	version_no integer,
	version_user varchar(12)
);

alter table party owner to postgres;

create table party_assoc
(
	party_ref varchar(12) not null,
	assoc_type varchar(4) not null,
	assoc_party_ref varchar(12),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_assoc_pkey
		primary key (party_ref, assoc_type)
);

alter table party_assoc owner to admin;

create table party_classification
(
	party_ref varchar(12) not null,
	class_type varchar(4) not null,
	class_code varchar(4),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_classification_pkey
		primary key (party_ref, class_type)
);

alter table party_classification owner to admin;

create table party_ext_ref
(
	party_ref varchar(12) not null,
	party_ext_ref_type varchar(4) not null,
	party_ext_ref varchar(20),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_ext_ref_pkey
		primary key (party_ref, party_ext_ref_type)
);

alter table party_ext_ref owner to admin;

create table party_instr
(
	party_ref varchar(12) not null,
	instr_type varchar(4) not null,
	instr_ref_type varchar(4),
	instr_ref varchar(12),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_instr_pkey
		primary key (party_ref, instr_type)
);

alter table party_instr owner to admin;

create table party_narrative
(
	party_ref varchar(12) not null,
	narr_type varchar(4) not null,
	narrative varchar(255),
	user_def varchar,
	description varchar(40),
	version_date date default now(),
	version_no integer default 1,
	version_user varchar(12) default USER,
	constraint party_narrative_pkey
		primary key (party_ref, narr_type)
);

alter table party_narrative owner to admin;

create table party_ssi
(
	party_ref varchar(12) not null,
	depot_alias varchar(12) not null,
	depot_descr varchar(35),
	depot_type varchar(6),
	comms_service varchar(12),
	dacc_ref varchar(12),
	account_no varchar(35),
	account_name varchar(35),
	depo_ref varchar(12),
	active_ind varchar(1),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_ssi_pkey
		primary key (party_ref, depot_alias)
);

alter table party_ssi owner to admin;

create table "User"
(
	id text not null
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

create table party_flag
(
	party_ref varchar(12) not null,
	flag_type integer not null,
	flag_code varchar(4) not null,
	user_def varchar(1),
	description varchar(40),
	version_date date default now(),
	version_no integer,
	version_user varchar(12),
	constraint party_flag_pkey
		primary key (party_ref, flag_code)
);

alter table party_flag owner to admin;

create table party_swift_router
(
	party_ref varchar(12) not null
		constraint party_swift_pkey
			primary key,
	bic_code varchar(11) not null,
	logical_term_id varchar(1) not null,
	version_date date not null,
	version_no integer not null,
	version_user varchar(12) not null
);

alter table party_swift_router owner to admin;

create table party_addr
(
	party_ref char(12) not null,
	addr_type char(4) not null,
	contact_name varchar(35) not null,
	contact_title varchar(35) not null,
	addr_line1 varchar(35) not null,
	addr_line2 varchar(35) not null,
	addr_line3 varchar(35) not null,
	addr_line4 varchar(35) not null,
	addr_line5 varchar(35) not null,
	addr_line6 varchar(35) not null,
	post_code varchar(12) not null,
	int_dial_code varchar(6) not null,
	phone_no varchar(20) not null,
	fax_no varchar(20) not null,
	email varchar(100) not null,
	version_date date not null,
	version_no integer not null,
	version_user varchar(12) not null,
	constraint party_addr_pkey
		primary key (party_ref, addr_type)
);

alter table party_addr owner to admin;

create table party_date
(
	party_ref char(12) not null,
	date_type char(4) not null,
	date char(10) not null,
	time char(8) not null,
	version_date date not null,
	version_no integer not null,
	version_user varchar(12) not null,
	constraint party_date_pkey
		primary key (party_ref, date_type)
);

alter table party_date owner to admin;

