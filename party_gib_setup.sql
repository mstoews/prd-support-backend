drop table if exists party_instr;
drop table if exists party_narrative;
drop table if exists party_flag;
drop table if exists party_ext_ref;
drop table if exists party_classification;
drop table if exists party;

create table if not exists party
(
	party_ref char(12) not null constraint party_idx primary key,
	party_type char(4) not null,
	party_short_name char(20),
	party_long_name char(40),
	party_extra_long_name char(40),
	active_ind char(1),
	version_date date default now(),
	version_no integer,
	version_user char(12)
);

alter table party owner to postgres;
create unique index if not exists "party.party_type_unique" on party (party_type);


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

alter table party_classification owner to postgres;

create table if not exists party_ext_ref
(
	party_ref char(12) not null,
	party_ext_ref_type char(4) not null,
	party_ext_ref char(20),
	user_def char,
	description char(40),
	version_date date,
	version_no integer,
	version_user char(12),
    PRIMARY KEY(party_ref,party_ext_ref_type)
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

select * FROM party_classification where class_type = 'LOCN' and party_ref = 'CMP4';

alter table "User" owner to postgres;

INSERT INTO party SELECT 'CMP4', 'CMP4','JASD98', 'JASD98','JASD98','A', now(), 1, 'JMARSDEN';
INSERT INTO party SELECT 'JASD91', 'DAC1','JASD98', 'JASD98','JASD98','A', now(), 1, 'JMARSDEN';
INSERT INTO party SELECT 'JASD92', 'DAC2','JASD98', 'JASD98','JASD98','A', now(), 1, 'JMARSDEN';
INSERT INTO party_classification SELECT 'CMP4','LOCN','TOK','N','Location', now(), 1, 'JMARSDEN';
INSERT INTO party_classification SELECT 'CMP4','CTRY','JP','N','Country', now(),1, 'JMARSDEN';
INSERT INTO party_classification SELECT 'CMP4','HOL','JP','N','Holiday',now(),1,'JMARSDEN';
INSERT INTO party_classification SELECT 'CMP4','PPUR','VALU','Y','Price Purpose',now(),1,'JMARSDEN';
INSERT INTO party_ext_ref SELECT 'CMP4','BIC','BRSCJPJT','Y','BIC Code',now(),1, 'JMARSDEN';
INSERT INTO party_ext_ref SELECT 'CMP4','JASD','12345','Y','JASDEC Code', now(), 1, 'JMARSDEN';
INSERT INTO party_ext_ref SELECT 'CMP4','BOJ','2345','Y','BOJ Code', now(), 1, 'JMARSDEN';
INSERT INTO party_narrative SELECT 'CMP4','INAM','BR SEC JAPAN','Y','Internal Narrative',now(),1,'JMARSDEN';
INSERT INTO party_narrative SELECT 'CMP4','PJEX','ブロードリッジ証券ジャパン','Y','Japanese Narrative', now(), 1, 'JMARSDEN';
INSERT INTO party_instr SELECT 'CMP4','COBI','ISO','JPY','N','Base Ccy',now(),1,'JMARSDEN';
INSERT INTO party_instr SELECT 'CMP4','COB3','ISO','JPY','N','Base Ccy',now(),1,'MST';

DELETE FROM party_instr;
SELECT * FROM party_instr;

SELECT party_ref, count(*) from party group by party_ref;

SELECT * FROM party_classification;
SELECT * FROM party;
SELECT * FROM party_ext_ref;
SELECT * FROM party_narrative;
SELECT * FROM party_instr;
SELECT * FROM party_flag;

DELETE FROM party WHERE party_ref = 'MYPT';
