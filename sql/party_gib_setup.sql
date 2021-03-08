drop table if exists party_instr;
drop table if exists party_narrative;
drop table if exists party_flag;
drop table if exists party_ext_ref;
drop table if exists party_classification;
drop table if exists party_ssi;
drop table if exists party_assoc;
drop table if exists party;

create table if not exists party
(
	party_ref varchar(12) not null,
	party_type varchar(4) null,
	party_short_name varchar(20),
	party_long_name varchar(40),
	party_extra_long_name varchar(40),
	active_ind varchar(1),
	version_date date default now(),
	version_no integer,
	version_user char(12),
	PRIMARY KEY(party_ref)
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
    PRIMARY KEY(party_ref,class_type)

);

drop table if exists party_assoc;
create table if not exists party_assoc
(
    party_ref       varchar(12),
    assoc_type      varchar(4),
    assoc_party_ref varchar(12),
    user_def        varchar(1),
    description     varchar(40),
    version_date    date,
    version_no      integer,
    version_user    varchar(12),
    PRIMARY KEY(party_ref, assoc_type)
);

alter table party_assoc owner to postgres;

drop table if exists party_ssi;
create table if not exists party_ssi
(
    party_ref     varchar(12),
    depot_alias   varchar(12),
    depot_descr   varchar(35),
    depot_type    varchar(6),
    comms_service varchar(12),
    dacc_ref      varchar(12),
    account_no    varchar(35),
    account_name  varchar(35),
    depo_ref      varchar(12),
    active_ind    varchar(1),
    user_def      varchar(1),
    description   varchar(40),
    version_date  date,
    version_no    integer,
    version_user  varchar(12),
    PRIMARY KEY(party_ref, depot_alias)

);



alter table party_classification owner to postgres;

drop table if exists party_ext_ref;
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
	primary key (party_ref, party_ext_ref_type)
);

alter table party_ext_ref owner to postgres;

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
    PRIMARY KEY(party_ref, flag_type)
);

alter table party_flag owner to postgres;
drop table if exists party_narrative;
create table if not exists party_narrative
(
	party_ref char(12) not null,
	narr_type char(4) not null,
	narrative char(255),
	user_def char,
	description char(40),
	version_date date default now(),
	version_no integer default 1,
	version_user char(12) default user,
	PRIMARY KEY(party_ref, narr_type)
);

alter table party_narrative owner to postgres;

drop table if exists party_instr;
create table if not exists party_instr
(
    party_ref char(12) not null,
    instr_ref char(12),
	instr_type char(4) not null,
	instr_ref_type char(4),
	user_def char,
	description char(40),
	version_date date default now(),
	version_no integer,
	version_user char(12),
    PRIMARY KEY(party_ref,instr_ref)
);

create table if not exists trades (
    host_reference char(12) not null,
    tref_ext_ref char(4) not null,
    opertion char(12) not null,
    instrument_ref_type char(4) not null,
    quantity int not null,
    counterparty char(12) not null,
    trade_price decimal(12,6) not null,
    trade_time time,
    value_date date not null,
    company varchar(12) not null,
    book varchar(4) not null,
    trade_currency varchar(4) not null,
    PRIMARY KEY(host_reference,tref_ext_ref)
);


--
-- DROP ROLE Role
-- CREATE ROLE role;

drop table if exists "User";
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
	-- role Role not null
);

DELETE FROM party WHERE party_ref = 'CMP10'
;

INSERT INTO party
SELECT 'CMP10',
       'COMP',
       'BA SEC JAPAN',
       'SA SEC JAPAN',
       'SA SEC JAPAN',
       'A',
        current_timestamp,
        1,
        'YAT'
;


DELETE FROM party_classification
WHERE party_ref = 'CMP10'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'LOCN',
       'TOK',
       'N',
       'Location',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'CTRY',
       'JP',
       'N',
       'Country',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'HOL',
       'JP',
       'N',
       'Holiday',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'HFRQ',
       'DAY',
       'Y',
       'Holding Statement Frequency',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'INRF',
       'ISIN',
       'Y',
       'Instrument External Reference',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'PPUR',
       'VALU',
       'Y',
       'Price Purpose',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'PCNF',
       'NORM',
       'Y',
       'Party Confirm Class',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       '1401',
       'INT',
       'Y',
       'Party External Refs',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'PTSP',
       'NONE',
       'Y',
       'Split Driver',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'CCPV',
       'APEI',
       'Y',
       'Cost of Carry Pos Valuation',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       '5020',
       'OO',
       'Y',
       'Trailer Code 1 Calc Method',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       '5021',
       'NONE',
       'Y',
       'Trailer Code 2 Calc Method',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       '5022',
       'NONE',
       'Y',
       'Trailer Code 3 Calc Method',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_classification
SELECT 'CMP10',
       'VDDA',
       '01MO',
       'Y',
       'Value Date Days Ahead',
        current_timestamp,
        1,
        'YAT'
;

DELETE FROM party_ext_ref
WHERE party_ref = 'CMP10'
;

INSERT INTO party_ext_ref
SELECT 'CMP11',
       'BIC',
       'SMPLJPJT',
       'Y',
       'BIC Code',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP11',
       'JSD',
       '88888',
       'Y',
       'JASDEC Ref',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP10',
       'JSDA',
       '0999',
       'Y',
       'JSDA Ref',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP10',
       'TSE',
       '88888',
       'Y',
       'TSE Ref',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP10',
       'OSE',
       '88888',
       'Y',
       'JSDA Ref',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP10',
       'BOJ',
       '0888',
       'Y',
       'BOJ Code',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP10',
       'JGNA',
       'SMPLJPJT001',
       'Y',
       'JSCC Netting A/C',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP10',
       'ABJJ',
       'SMPLJPJT',
       'Y',
       'Agent BIC (JGBCC)',
        current_timestamp,
        1,
        'YAT'
;

INSERT INTO party_ext_ref
SELECT 'CMP10',
       'ABJN',
       'SMPLJPJT',
       'Y',
       'Agent BIC (Non-JGBCC)',
        current_timestamp,
        1,
        'YAT'
;

DELETE FROM party_narrative WHERE party_ref = 'CMP10'
;


select * from party;

-- select * from party_ssi;


