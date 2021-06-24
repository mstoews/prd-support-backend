DELETE FROM party
WHERE party_ref = 'CMP4'
;

select * from party_ext_ref;

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
	version_date date default now(),
	version_no integer,
	version_user varchar(12)
);

alter table party owner to postgres;

select * from party;

INSERT INTO party
SELECT 'CMP4',
       'COMP',
       'BR SEC JAPAN',
       'BR SEC JAPAN',
       'BR SEC JAPAN',
       'A',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_classification
WHERE party_ref = 'CMP4'
;

INSERT INTO party_classification
SELECT 'CMP4',
       'LOCN',
       'TOK',
       'N',
       'Location',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_classification
SELECT 'CMP4',
       'CTRY',
       'JP',
       'N',
       'Country',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_classification
SELECT 'CMP4',
       'HOL',
       'JP',
       'N',
       'Holiday',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_classification
SELECT 'CMP4',
       'PPUR',
       'VALU',
       'Y',
       'Price Purpose',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_ext_ref
WHERE party_ref = 'CMP4'
;

INSERT INTO party_ext_ref
SELECT 'C030',
       'AEID',
       'Customer Company ID',
       'Y',
       'BIC Code',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_ext_ref
SELECT 'CMP4',
       'JASD',
       '12345',
       'Y',
       'JASDEC Code',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_ext_ref
SELECT 'CMP4',
       'BOJ',
       '2345',
       'Y',
       'BOJ Code',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_narrative
WHERE party_ref = 'CMP4'
;

INSERT INTO party_narrative
SELECT 'CMP4',
       'INAM',
       'BR SEC JAPAN',
       'Y',
       'Internal Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_narrative
SELECT 'CMP4',
       'PJEX',
       'ブロードリッジ証券ジャパン',
       'Y',
       'Japanese Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_instr
WHERE party_ref = 'CMP4'
;

INSERT INTO party_instr
SELECT 'CMP4',
       'COBI',
       'ISO',
       'JPY',
       'N',
       'Base Ccy',
       current_timestamp,
       1,
       'JMARSDEN'
;

DELETE FROM party_ssi
WHERE party_ref = 'CMP4'
;

INSERT INTO party_ssi
SELECT 'CMP4',
       'JASD00',
       'JASD00',
       'Depot',
       'JASDEC',
       'JASD00',
       '1234500',
       'JASDEC OWN',
       'BRSCJPJT',
       'A',
       'Y',
       'JASDEC TEMPLATE',
       current_timestamp,
       1,
       'JMARSDEN'
;

INSERT INTO party_ssi
SELECT 'CMP4',
       'JASD40',
       'JASD40',
       'Depot',
       'JASDEC',
       'JASD40',
       '1234540',
       'JASDEC ASSGN COLL',
       'BRSCJPJT',
       'A',
       'Y',
       'JASDEC TEMPLATE',
       current_timestamp,
       1,
       'JMARSDEN'
;

INSERT INTO party_ssi
SELECT 'CMP4',
       'JASD60',
       'JASD60',
       'Depot',
       'JASDEC',
       'JASD60',
       '1234560',
       'JASDEC SAFEKEEPING',
       'BRSCJPJT',
       'A',
       'Y',
       'JASDEC TEMPLATE',
       current_timestamp,
       1,
       'JMARSDEN'
;

INSERT INTO party_ssi
SELECT 'CMP4',
       'JASD80',
       'JASD80',
       'Depot',
       'JASDEC',
       'JASD80',
       '1234580',
       'JASDEC NR A/C',
       'BRSCJPJT',
       'A',
       'Y',
       'JASDEC TEMPLATE',
       current_timestamp,
       1,
       'JMARSDEN'
;

INSERT INTO party_ssi
SELECT 'CMP4',
       'JASD98',
       'JASD98',
       'Depot',
       'JASDEC',
       'JASD98',
       '1234598',
       'JASDEC PLEDGE',
       'BRSCJPJT',
       'A',
       'Y',
       'JASDEC TEMPLATE',
       current_timestamp,
       1,
       'JMARSDEN'
;
