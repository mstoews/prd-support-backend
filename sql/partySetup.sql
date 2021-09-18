-- Create tables with data



drop table if exists party;
create table party
(
    party_ref             varchar(12),
    party_type            varchar(4),
    party_short_name      varchar(20),
    party_long_name       varchar(40),
    party_extra_long_name varchar(40),
    active_ind            varchar(1),
    version_date          date,
    version_no            integer,
    version_user          varchar(12),
	constraint party_pkey
		primary key (party_ref)

);

alter table party owner to postgres;

INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('TRADING', 'BOOK', 'TRADING', 'TRADING', 'TRADING', 'A', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('JASD00', 'DACC', 'JASD00', 'JASD00', 'JASD00', 'A', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('DEPO00', 'DEPO', 'DEPO00', 'DEPO00', 'DEPO00', 'A', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'SECP', 'JP BROKER', 'JP BROKER', 'JP BROKER', 'A', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'SECP', 'JP CUST CLIENT', 'JP CUSTODY CLIENT', 'JP CUSTODY CLIENT', 'A', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'SECP', 'JP DVP CLIENT', 'JP DVP CLIENT', 'JP DVP CLIENT', 'A', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('JASD98', 'DACC', 'JASD99', 'JASD98', 'JASD98', 'A', '2021-01-27', 2, 'ADMIN');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('JASD60', 'DACC', 'JASD60', 'JASD60 NEW', 'JASD60', 'A', '2021-01-28', 2, 'ADMIN');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('CMP5', 'COMP', 'BR SEC JAPAN NEW', 'BR SEC JAPAN', 'BR SEC JAPAN', 'A', '2021-01-28', 3, 'ADMIN');
INSERT INTO public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) VALUES ('CMP4', 'COMP', 'BR SEC JAPAN NEW', 'BR SEC JAPAN', 'BR SEC JAPAN', 'A', '2021-01-28', 3, 'ADMIN');

drop table if exists party_assoc;
create table party_assoc
(
    party_ref       varchar(12),
    assoc_type      varchar(4),
    assoc_party_ref varchar(12),
    user_def        varchar(1),
    description     varchar(40),
    version_date    date,
    version_no      integer,
    version_user    varchar(12),
	constraint party_assoc_pkey
		primary key (party_ref, assoc_type)
);

alter table party_assoc
    owner to admin;

INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('JASD98', 'ASDP', 'JJSDJPJT', 'N', 'Place of Settlement (PSET) Party', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('JASD60', 'ASDP', 'JJSDJPJT', 'N', 'Place of Settlement (PSET) Party', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('JASD00', 'ASDP', 'JJSDJPJT', 'N', 'Place of Settlement (PSET) Party', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('DEPO00', 'ASDP', 'JJSDJPJT', 'N', 'Place of Settlement (PSET) Party', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'SEGP', 'SEGPARTY1', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'SEGP', 'SEGPARTY1', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'SEGP', 'SEGPARTY1', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'ASDP', 'JJSDJPJT', 'N', 'TEST Association', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'ASDP', 'JJSDJPJT', 'N', 'TEST Association', '2021-01-27', 1, 'JMARSDEN');

drop table if exists party_classification;
create table party_classification
(
	party_ref varchar(12),
	class_type varchar(4),
	class_code varchar(4),
	user_def varchar(1),
	description varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_classification_pkey
		primary key (party_ref, class_type)
);

alter table party_classification
    owner to admin;

INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 'ACCL', 'TRDG', 'N', 'Accounting Class', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 'POST', 'TRDG', 'N', 'Position Type', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 'HDTT', 'FINI', 'N', 'Holding Tax Type', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 'MKTT', 'SECO', 'N', 'Market Type (Primary / Grey / Secondary)', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('JASD98', 'LOCN', 'TOK', 'N', 'Location', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('JASD98', 'CTRY', 'JP', 'N', 'Country', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('JASD60', 'LOCN', 'TOK', 'N', 'Location', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('JASD60', 'CTRY', 'JP', 'N', 'Country', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('JASD00', 'LOCN', 'TOK', 'N', 'Location', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('JASD00', 'CTRY', 'JP', 'N', 'Country', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('DEPO00', 'LOCN', 'TOK', 'N', 'Location', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('DEPO00', 'CTRY', 'JP', 'N', 'Country', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'CTRY', 'JP', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'LOCN', 'TOK', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'HOL', 'BURE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'PADC', 'EXT', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'PCHG', 'NONE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'PCCS', 'NONE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'PCUS', 'NORM', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', '8060', 'BROK', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', '2077', 'RESI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', '2081', '90', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', '8008', 'JAPA', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', '8001', 'SCLM', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', '8006', 'JPN', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', '8002', 'RESI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'CTRY', 'JP', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'LOCN', 'TOK', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'HOL', 'BURE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'PADC', 'SAFE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'PCHG', 'NONE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'PCCS', 'NONE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'PCUS', 'SCS', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', '8060', 'GCLI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'LBAL', 'CUST', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', '2077', 'RESI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', '2081', '12', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', '8008', 'JAPA', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', '8001', 'SCLM', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', '8006', 'JPN', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', '8002', 'RESI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'CTRY', 'JP', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'LOCN', 'TOK', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'HOL', 'BURE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'PADC', 'EXT', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'PCHG', 'NONE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'PCCS', 'NONE', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'PCUS', 'NORM', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', '8060', 'GCLI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', '2077', 'RESI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', '2081', '21', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', '8008', 'JAPA', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', '8001', 'SCLM', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', '8006', 'JPN', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', '8002', 'RESI', 'Y', 'TBC', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'CTRY', 'JP', 'N', 'Country', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'PPUR', 'VALU', 'Y', 'Price Purpose', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'LOCN', 'TOK', 'N', 'Location', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'HOL', 'JP', 'N', 'Holiday', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'PPUR', 'VALU', 'Y', 'Price Purpose', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'HOL', 'JP', 'N', 'Holiday', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'CTRY', 'JP', 'N', 'Country', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'LOCN', 'TOK', 'N', 'Location', '2021-01-25', 1, 'JMARSDEN');


drop table if exists party_ext_ref;
create table party_ext_ref
(
	party_ref varchar(12),
	party_ext_ref_type varchar(4),
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

drop table if exists party_flag;
create table party_flag
(
    party_ref    varchar(12),
    flag_type    integer,
    flag_code    varchar(4),
    user_def     varchar(1),
    description  varchar(40),
    version_date date,
    version_no   integer,
    version_user varchar(12),
	constraint party_flag_pkey
		primary key (party_ref, flag_type)

);

alter table party_flag
    owner to admin;

INSERT INTO public.party_flag (party_ref, flag_type, flag_code, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 1102, 'EXMT', 'N', 'Tax Exempt', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_flag (party_ref, flag_type, flag_code, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 8067, '1', 'N', 'Prin On Market (Trading A/C)', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_flag (party_ref, flag_type, flag_code, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 8068, '2', 'N', 'Prin Off Market (Trading A/C)', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_flag (party_ref, flag_type, flag_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 1105, '2', 'N', 'TEST DESCRIPTION', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_flag (party_ref, flag_type, flag_code, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 1105, '2', 'N', 'TEST DESCRIPTION', '2021-01-25', 1, 'JMARSDEN');

drop table if exists party_instr;
create table party_instr
(
    party_ref      varchar(12),
    instr_type     varchar(4),
    instr_ref_type varchar(4),
    instr_ref      varchar(12),
    user_def       varchar(1),
    description    varchar(40),
    version_date   date,
    version_no     integer,
    version_user   varchar(12),
    	constraint party_instr_pkey
		primary key (party_ref, instr_type)

);

alter table party_instr
    owner to admin;

INSERT INTO public.party_instr (party_ref, instr_type, instr_ref_type, instr_ref, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_BR1', 'SEBI', 'INT', 'JPY', 'N', 'Base Ccy', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_instr (party_ref, instr_type, instr_ref_type, instr_ref, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL2', 'SEBI', 'INT', 'JPY', 'N', 'Base Ccy', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_instr (party_ref, instr_type, instr_ref_type, instr_ref, user_def, description, version_date, version_no, version_user) VALUES ('BVCP_JP_CL3', 'SEBI', 'INT', 'JPY', 'N', 'Base Ccy', '2021-01-27', 1, 'SQL_UTIL');
INSERT INTO public.party_instr (party_ref, instr_type, instr_ref_type, instr_ref, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'COBI', 'ISO', 'JPY', 'N', 'Base Ccy', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_instr (party_ref, instr_type, instr_ref_type, instr_ref, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'COBI', 'ISO', 'JPY', 'N', 'Base Ccy', '2021-01-25', 1, 'JMARSDEN');

drop table if exists party_narrative;
create table party_narrative
(
    party_ref    varchar(12) not null,
    narr_type    varchar(4)  not null,
    narrative    varchar(255),
    user_def     varchar,
    description  varchar(40),
    version_date date        default now(),
    version_no   integer     default 1,
    version_user varchar(12) default USER,
    constraint party_narrative_pkey
        primary key (party_ref, narr_type)
);

alter table party_narrative
    owner to admin;

INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 'INAM', 'TRADING BOOK', 'Y', 'Internal Narrative', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('TRADING', 'PJEX', 'トレーディング勘定', 'Y', 'Japanese Narrative', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('JASD98', 'INAM', 'JASD98 Pledge A/C', 'Y', 'Internal Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('JASD98', 'PJEX', '質権口', 'Y', 'Japanese Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('JASD60', 'INAM', 'JASD60 Client A/C', 'Y', 'Internal Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('JASD60', 'PJEX', '保振預かり口', 'Y', 'Japanese Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('JASD00', 'INAM', 'JASD00', 'Y', 'Internal Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('JASD00', 'PJEX', 'ほふり保有口（自己）', 'Y', 'Japanese Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('DEPO00', 'INAM', 'DEPO00', 'Y', 'Internal Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('DEPO00', 'PJEX', 'ほふり保有口（自己）', 'Y', 'Japanese Narrative', '2021-01-27', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('CPM4', 'COMP', 'DEPO00', 'Y', 'Internal Narrative', '2021-01-27', 1, 'ADMIN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'INAM', 'BR SEC JAPAN', 'Y', 'Internal Narrative', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'PJEX', 'ブロードリッジ証券ジャパン', 'Y', 'Japanese Narrative', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'INAM', 'BR SEC JAPAN', 'Y', 'Internal Narrative', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'PJEX', 'ブロードリッジ証券ジャパン', 'Y', 'Japanese Narrative', '2021-01-25', 1, 'JMARSDEN');


drop table if exists party_ssi;
create table party_ssi
(
	party_ref varchar(12),
	depot_alias varchar(12),
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

INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'JASD60', 'JASD60', 'Depot', 'JASDEC', 'JASD60', '1234560', 'JASDEC SAFEKEEPING', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'JASD98', 'JASD98', 'Depot', 'JASDEC', 'JASD00', '1234598', 'JASDEC PLEDGE', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'JASD00', 'JASD00', 'Depot', 'JASDEC', 'JASD00', '1234500', 'JASDEC OWN', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'JASD80', 'JASD80', 'Depot', 'JASDEC', 'JASD80', '1234580', 'JASDEC NR A/C', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP5', 'JASD40', 'JASD40', 'Depot', 'JASDEC', 'JASD40', '1234540', 'JASDEC ASSGN COLL', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'JASD60', 'JASD60', 'Depot', 'JASDEC', 'JASD60', '1234560', 'JASDEC SAFEKEEPING', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'JASD00', 'JASD00', 'Depot', 'JASDEC', 'JASD00', '1234500', 'JASDEC OWN', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'JASD40', 'JASD40', 'Depot', 'JASDEC', 'JASD40', '1234540', 'JASDEC ASSGN COLL', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'JASD80', 'JASD80', 'Depot', 'JASDEC', 'JASD80', '1234580', 'JASDEC NR A/C', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');
INSERT INTO public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) VALUES ('CMP4', 'JASD98', 'JASD98', 'Depot', 'JASDEC', 'JASD00', '1234598', 'JASDEC PLEDGE', 'BRSCJPJT', 'A', 'Y', 'JASDEC TEMPLATE', '2021-01-25', 1, 'JMARSDEN');


