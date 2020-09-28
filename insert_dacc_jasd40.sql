DELETE FROM party
WHERE party_ref = 'JASD40';

INSERT INTO party
SELECT 'JASD40',
       'DACC',
       'JASD40',
       'JASD40',
       'JASD40',
       'A',
        current_timestamp,
        1,
        'JMARSDEN';

DELETE FROM party_classification
WHERE party_ref = 'JASD40'
;

INSERT INTO party_classification
SELECT 'JASD40',
       'LOCN',
       'TOK',
       'N',
       'Location',
        current_timestamp,
        1,
        'JMARSDEN'
;

INSERT INTO party_classification
SELECT 'JASD40',
       'CTRY',
       'JP',
       'N',
       'Country',
        current_timestamp,
        1,
        'JMARSDEN'
;

DELETE FROM party_narrative
WHERE party_ref = 'JASD40';

INSERT INTO party_narrative
SELECT 'JASD40',
       'INAM',
       'JASD40 Dedicated Collateral A/C',
       'Y',
       'Internal Narrative',
        current_timestamp,
        1,
        'JMARSDEN';

INSERT INTO party_narrative
SELECT 'JASD40',
       'PJEX',
       '担保口（専用口）',
       'Y',
       'Japanese Narrative',
        current_timestamp,
        1,
        'JMARSDEN';

DELETE FROM party_assoc
WHERE party_ref = 'JASD40'
;

INSERT INTO party_assoc
SELECT 'JASD40',
       'ASDP',
       'JJSDJPJT',
       'N',
       'Place of Settlement (PSET) Party',
       current_timestamp,
       1,
       'JMARSDEN'
;
