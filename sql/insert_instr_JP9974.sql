DELETE FROM instr
WHERE instr_ref = 'JP9974'
\g

INSERT INTO instr
SELECT 'JP9974',
       'EQTY',
       '',
       'BELC ORD',
       'BELC ORD SHARES',
       'A',
       null,
       null,
       null,
       null,
       'JPY',
       6,
       1,
       1,
       'UC',
       100,
       'TRADING',
       'JASDAQ',
       100,
       0,
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_classification
WHERE instr_ref = 'JP9974'
\g

INSERT INTO instr_classification
SELECT 'JP9974',
       '17',
       'JP',
       'N',
       'Issue Country',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JP9974',
       '5',
       'QUIK',
       'N',
       'Prefered Instr Ref Type',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JP9974',
       '8007',
       'STCK',
       'Y',
       'JRR Instr Class',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JP9974',
       '8065',
       'JPS',
       'N',
       'JASDEC Instr Type',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JP9974',
       '8011',
       'RESI',
       'N',
       'JRR Issuer Type',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_classification
SELECT 'JP9974',
       '1210',
       'JDEC',
       'N',
       'Settle Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_ext_ref
WHERE instr_ref = 'JP9974'
\g

INSERT INTO instr_ext_ref
SELECT 'JP9974',
       'ISIN',
       'JP3105700003',
       'Y',
       'ISIN Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_ext_ref
SELECT 'JP9974',
       'QUIK',
       '9974',
       'Y',
       'Quick Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_ext_ref
SELECT 'JP9974',
       'SICC',
       '99740',
       'Y',
       'SICC (JASDEC) Code',
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_flag
WHERE instr_ref = 'JP9974'
\g

INSERT INTO instr_flag
SELECT 'JP9974',
       '1010',
       'PSMS',
       'N',
       'PSMS Eligible Instr Flag',
       current_timestamp,
       1,
       'JMARSDEN'
\g

DELETE FROM instr_narrative
WHERE instr_ref = 'JP9974'
\g

INSERT INTO instr_narrative
SELECT 'JP9974',
       'IEDE',
       'BELC ORD',
       'Y',
       'English description',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_narrative
SELECT 'JP9974',
       'IEDJ',
       '（株）ベルク',
       'Y',
       'Japanese description',
       current_timestamp,
       1,
       'JMARSDEN'
\g

INSERT INTO instr_narrative
SELECT 'JP9974',
       'INAM',
       'BELC ORD',
       'Y',
       'Internal description',
       current_timestamp,
       1,
       'JMARSDEN'
\g

