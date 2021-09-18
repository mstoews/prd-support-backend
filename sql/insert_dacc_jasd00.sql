DELETE FROM party
WHERE  party_ref = 'JASD00'
\g

INSERT INTO party
SELECT 'JASD00',
       'DACC',
       'JASD00',
       'JASD00',
       'JASD00',
       'A',
        current_timestamp,
        1,
        'JMARSDEN'
\g

DELETE FROM party_classification
WHERE party_ref = 'JASD00'
\g

INSERT INTO party_classification
SELECT 'JASD00',
       'LOCN',
       'TOK',
       'N',
       'Location',
        current_timestamp,
        1,
        'JMARSDEN'
\g

INSERT INTO party_classification
SELECT 'JASD00',
       'CTRY',
       'JP',
       'N',
       'Country',
        current_timestamp,
        1,
        'JMARSDEN'
\g

DELETE FROM party_narrative
WHERE party_ref = 'JASD00'
\g

INSERT INTO party_narrative
SELECT 'JASD00',
       'INAM',
       'JASD00',
       'Y',
       'Internal Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
\g

INSERT INTO party_narrative
SELECT 'JASD00',
       'PJEX',
       'ほふり保有口（自己）',
       'Y',
       'Japanese Narrative',
        current_timestamp,
        1,
        'JMARSDEN'
\g

DELETE FROM party_assoc
WHERE party_ref = 'JASD00'
\g

INSERT INTO party_assoc
SELECT 'JASD00',
       'ASDP',
       'JJSDJPJT',
       'N',
       'Place of Settlement (PSET) Party',
       current_timestamp,
       1,
       'JMARSDEN'
\g

