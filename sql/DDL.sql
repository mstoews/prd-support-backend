create table if not exists trades
(
	host_reference varchar(12) not null,
	tref_ext_ref varchar(4) not null,
	opertion varchar(12) not null,
	instrument_ref_type varchar(4) not null,
	quantity integer not null,
	counterparty varchar(12) not null,
	trade_price numeric(12,6) not null,
	trade_time time,
	value_date date not null,
	company varchar(12) not null,
	book varchar(4) not null,
	trade_currency varchar(4) not null,
	constraint trades_pkey
		primary key (host_reference, tref_ext_ref)
);

alter table trades owner to postgres;

create table if not exists instr
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

alter table instr owner to postgres;

create table if not exists instr_classification
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

alter table instr_classification owner to postgres;

create table if not exists instr_ext_ref
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

alter table instr_ext_ref owner to postgres;

create table if not exists instr_flag
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

alter table instr_flag owner to postgres;

create table if not exists instr_narrative
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

alter table instr_narrative owner to postgres;

create table if not exists instr_date
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

alter table instr_date owner to postgres;

create table if not exists instr_accrual
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

alter table instr_accrual owner to postgres;

create table if not exists environment
(
	environment varchar(10) not null
		constraint environment_pkey
			primary key,
	image varchar(255),
	description varchar(30),
	usr varchar(15),
	active char
);

alter table environment owner to postgres;

create table if not exists "User"
(
	id text not null
		constraint "User_pkey"
			primary key,
	"createdAt" timestamp(3) default CURRENT_TIMESTAMP not null,
	"updatedAt" timestamp(3) not null,
	email text not null,
	password text not null,
	firstname text not null,
	lastname text not null
);

alter table "User" owner to postgres;

create table if not exists party
(
	party_ref varchar(12) not null
		constraint party_pkey
			primary key,
	party_type varchar(4),
	party_short_name varchar(20),
	party_long_name varchar(40),
	party_extra_long_name varchar(40),
	active_ind varchar(1),
	version_date date default now(),
	version_no integer,
	version_user char(12)
);

alter table party owner to postgres;

create table if not exists party_classification
(
	party_ref char(12) not null,
	class_type char(4) not null,
	class_code char(4),
	user_def char,
	description char(40),
	version_date date,
	version_no integer,
	version_user char(12),
	constraint party_classification_pkey
		primary key (party_ref, class_type)
);

alter table party_classification owner to postgres;

create table if not exists party_assoc
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

alter table party_assoc owner to postgres;

create table if not exists party_ssi
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

alter table party_ssi owner to postgres;

create table if not exists party_flag
(
	party_ref char(12) not null,
	flag_type integer not null,
	flag_code char(4),
	user_def char,
	description char(40),
	version_date date,
	version_no integer,
	version_user char(12),
	constraint party_flag_pkey
		primary key (party_ref, flag_type)
);

alter table party_flag owner to postgres;

create table if not exists party_ext_ref
(
	party_ref varchar(12) not null,
	party_ext_ref_type varchar(4) not null,
	party_ext_ref varchar(20),
	user_def varchar,
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_ext_ref_pkey
		primary key (party_ref, party_ext_ref_type)
);

alter table party_ext_ref owner to postgres;

create table if not exists party_narrative
(
	party_ref char(12) not null,
	narr_type char(4) not null,
	narrative char(255),
	user_def char,
	description char(40),
	version_date date default now(),
	version_no integer default 1,
	version_user char(12) default USER,
	constraint party_narrative_pkey
		primary key (party_ref, narr_type)
);

alter table party_narrative owner to postgres;

create table if not exists party_instr
(
	party_ref char(12) not null,
	instr_ref char(12) not null,
	instr_type char(4) not null,
	instr_ref_type char(4),
	user_def char,
	description char(40),
	version_date date default now(),
	version_no integer,
	version_user char(12),
	constraint party_instr_pkey
		primary key (party_ref, instr_ref)
);

alter table party_instr owner to postgres;

