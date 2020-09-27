DELETE FROM party WHERE party_ref = 'JASD98' and party_type = 'DACC';
DELETE FROM party WHERE party_ref = 'JASD98';
DELETE FROM party_classification WHERE party_ref = 'JASD98';
DELETE FROM party_assoc WHERE party_ref = 'JASD98';
DELETE FROM party_narrative WHERE party_ref = 'JASD98';

SELECT * from party WHERE party_ref = 'JASD98' and party_type = 'DACC';
INSERT INTO party SELECT 'JASD98','DACC',  'JASD98',  'JASD98',  'JASD98',  'A',   current_timestamp,   1,   'JMARSDEN' ;
INSERT INTO party_classification SELECT 'JASD98','LOCN', 'TOK', 'N', 'Location',  current_timestamp,  1,  'JMARSDEN';
INSERT INTO party_classification SELECT 'JASD98',  'CTRY',  'JP',  'N',  'Country', current_timestamp, 1, 'JMARSDEN';
INSERT INTO party_narrative SELECT 'JASD98',  'INAM',  'JASD98 Pledge A/C',  'Y',  'Internal Narrative', current_timestamp, 1, 'JMARSDEN';
INSERT INTO party_narrative  SELECT 'JASD98', 'PJEX', '質権口', 'Y', 'Japanese Narrative',  current_timestamp,  1,  'JMARSDEN';
INSERT INTO party_assoc SELECT 'JASD98', 'ASDP', 'JJSDJPJT', 'N', 'Place of Settlement (PSET) Party', current_timestamp, 1, 'JMARSDEN';

select * from party;
select * from party_classification;

