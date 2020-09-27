DELETE FROM party
WHERE party_ref = 'JASD60';

INSERT INTO party
SELECT 'JASD60',
       'DACC',
       'JASD60',
       'JASD60',
       'JASD60',
       'A',
        current_timestamp,
        1,
        'JMARSDEN';

DELETE FROM party_classification
WHERE party_ref = 'JASD60';

INSERT INTO party_classification
SELECT 'JASD60',
       'LOCN',
       'TOK',
       'N',
       'Location',
        current_timestamp,
        1,
        'JMARSDEN';

INSERT INTO party_classification
SELECT 'JASD60',
       'CTRY',
       'JP',
       'N',
       'Country',
        current_timestamp,
        1,
        'JMARSDEN';

DELETE FROM party_narrative
WHERE party_ref = 'JASD60';

INSERT INTO party_narrative
SELECT 'JASD60',
       'INAM',
       'JASD60 Client A/C',
       'Y',
       'Internal Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_narrative
SELECT 'JASD60',
       'PJEX',
       '保振預かり口',
       'Y',
       'Japanese Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_assoc
WHERE party_ref = 'JASD60'
;

INSERT INTO party_assoc
SELECT 'JASD60',
       'ASDP',
       'JJSDJPJT',
       'N',
       'Place of Settlement (PSET) Party',
       current_timestamp,
       1,
       'JMARSDEN'
;
