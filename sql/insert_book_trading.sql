DELETE FROM party
WHERE  party_ref = 'TRADING'
;


INSERT INTO party
SELECT 'TRADING',
       'BOOK',
       'TRADING',
       'TRADING',
       'TRADING',
       'A',
        current_timestamp,
        1,
        'JMARSDEN'
;




DELETE FROM party_classification
WHERE party_ref = 'TRADING'
;

INSERT INTO party_classification
SELECT 'TRADING',
       'ACCL',
       'TRDG',
       'N',
       'Accounting Class',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_classification
SELECT 'TRADING',
       'POST',
       'TRDG',
       'N',
       'Position Type',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_classification
SELECT 'TRADING',
       'HDTT',
       'FINI',
       'N',
       'Holding Tax Type',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_classification
SELECT 'TRADING',
       'MKTT',
       'SECO',
       'N',
       'Market Type (Primary / Grey / Secondary)',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_flag
WHERE party_ref = 'TRADING'
;

INSERT INTO party_flag
SELECT 'TRADING',
       '1102',
       'EXMT',
       'N',
       'Tax Exempt',
       current_timestamp,
       1,
       'JMARSDEN'
;

INSERT INTO party_flag
SELECT 'TRADING',
       '8067',
       '1',
       'N',
       'Prin On Market (Trading A/C)',
       current_timestamp,
       1,
       'JMARSDEN'
;

INSERT INTO party_flag
SELECT 'TRADING',
       '8067',
       '2',
       'N',
       'Prin Off Market (Trading A/C)',
       current_timestamp,
       1,
       'JMARSDEN'
;

DELETE FROM party_narrative
WHERE party_ref = 'TRADING'
;

INSERT INTO party_narrative
SELECT 'TRADING',
       'INAM',
       'TRADING BOOK',
       'Y',
       'Internal Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_narrative
SELECT 'TRADING',
       'PJEX',
       'トレーディング勘定',
       'Y',
       'Japanese Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_assoc
WHERE party_ref = 'TRADING'
;
