delete from party where party_ref in ('CMP6','CMP7','CMP8');



select * from instr

create table environment (
    environment varchar(10) not null,
    image varchar(255) null,
    description varchar(30) null,
    usr varchar(15) null,
    active char(1) null,
    PRIMARY KEY (environment)
);

delete from environment;
insert into environment select 'UAT', 'hotel-1.jpg','SIT SMALL BUSINESS', 'TEST USER 1', '1';
insert into environment select 'DEV', 'hotel-2.jpg','UAT SMALL BUSINESS', 'TEST USER 2', '0';
update environment set active = '0' where environment = 'DEV';

select * from environment;

DELETE FROM instr
WHERE instr_ref = 'JGB20YR135'
\g

INSERT INTO instr
SELECT 'JGB20YR135',
       'DEBT',
       '',
       'JGB 20 YR NO 135',
       'JGB 20 YR NO 135',
       'A',
       '2012-04-26',
       99.83,
       '2032-03-20',
       100,
       'JPY',
       6,
       1,
       1,
       'PC',
       100,
       'TRADING',
       'JP DEBT MKT',
       100,
       0,
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_classification
WHERE instr_ref = 'JGB20YR135'
\g

INSERT INTO instr_classification
SELECT 'JGB20YR135',
       '17',
       'JP',
       'N',
       'Issue Country',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JGB20YR135',
       '5',
       'QUIK',
       'N',
       'Prefered Instr Ref Type',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JGB20YR135',
       '1004',
       'DEBT',
       'N',
       'Accounting Class',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JGB20YR135',
       '8007',
       'GVLT',
       'Y',
       'JRR Instr Class',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JGB20YR135',
       '1220',
       'NORM',
       'N',
       'Charge Type',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JGB20YR135',
       '8011',
       'RESI',
       'N',
       'JRR Issuer Type',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JGB20YR135',
       '1210',
       'JPGV',
       'N',
       'Settle Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_ext_ref
WHERE instr_ref = 'JGB20YR135'
\g

INSERT INTO instr_ext_ref
SELECT 'JGB20YR135',
       'ISIN',
       'JP1201351241',
       'Y',
       'ISIN Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_ext_ref
SELECT 'JGB20YR135',
       'QUIK',
       '900690135',
       'Y',
       'Quick Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_ext_ref
SELECT 'JGB20YR135',
       'SICC',
       '901350069',
       'Y',
       'SICC (JASDEC) Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_flag
WHERE instr_ref = 'JGB20YR135'
\g

INSERT INTO instr_flag
SELECT 'JGB20YR135',
       '1010',
       'PSMS',
       'N',
       'PSMS Eligible Instr Flag',
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_narrative
WHERE instr_ref = 'JGB20YR135'
\g

INSERT INTO instr_narrative
SELECT 'JGB20YR135',
       'IEDE',
       'JGB 20 YR NO 135',
       'Y',
       'English description',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_narrative
SELECT 'JGB20YR135',
       'IEDJ',
       '国債20年135回',
       'Y',
       'Japanese description',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_narrative
SELECT 'JGB20YR135',
       'INAM',
       'JGB 20 YR NO 135',
       'Y',
       'Internal description',
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_accrual
WHERE instr_ref = 'JGB20YR135'
\g

INSERT INTO instr_accrual
SELECT 'JGB20YR135',
       1,
       'JGB',
       'N',
       'N',
       'JPY',        /* paym_ccy */
       '2012-04-26', /* start_accr_date */
       '2012-09-20', /* first_paym_date */
       '2032-03-20', /* last_paym_date */
       'N',          /* frn_flag */
       'N',          /* neg_flag */
       'M',          /* freq_rule */
       6,            /* freq_unit */
       'JPD',        /* cal_code */
       'FIX',        /* date_rule */
       'N',          /* eom_flag */
       1.7,          /* cpon_rate */
       'RND0',       /* rnd_rule */
       1,            /* rdat_offset */
       'Y',          /* user_def */
       'Set accrual details', /* descr */
       current_timestamp,
       1,
       'JMARSDEN'
\g