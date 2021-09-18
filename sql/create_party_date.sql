CREATE TABLE IF NOT EXISTS party_date
(
     party_ref         CHAR(12)        NOT NULL,    /* Stores the company ref e.g. CMP4 */
     date_type         CHAR(4)         NOT NULL,    /* DAST - Default Settle Date etc */
     date              CHAR(10)        NOT NULL,    /* 1900-01-01 */
     time              CHAR(8)         NOT NULL,    /* 07:00:00 */
     version_date      DATE            NOT NULL,
     version_no        INT             NOT NULL,
     version_user      VARCHAR(12)     NOT NULL,

     PRIMARY KEY (party_ref, date_type)
);

DELETE FROM party_date WHERE party_ref = 'CMPX-JP';

INSERT INTO party_date
SELECT 'CMPX-JP',
       'DAST',
       '1900-01-01',
       '07:00:00',
       NOW (),
       1,
       'JMARSDEN'
;

DELETE FROM party_date WHERE party_ref = 'CMPX-HK';

INSERT INTO party_date
SELECT 'CMPX-HK',
       'DAST',
       '1900-01-01',
       '07:00:00',
       NOW (),
       1,
       'JMARSDEN'
;