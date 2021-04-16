CREATE TABLE IF NOT EXISTS party_swift_router
(
     party_ref         CHAR(12)        NOT NULL,    /* Stores the company ref e.g. CMP4 */
     bic_code          CHAR(11)        NOT NULL,    /* Stores the BIC inc Branch Code  - default from company */
     logical_term_id   CHAR(1)         NOT NULL,    /* Stores the logical terminal ID for incoming */
     version_date      DATE            NOT NULL,
     version_no        INT             NOT NULL,
     version_user      VARCHAR(12)     NOT NULL,

     PRIMARY KEY (party_ref)
);

/* Sample Data for JP Template */

INSERT INTO party_swift_router
SELECT 'CMPX-JP',
       'BRSCJPJTXXX',
       'A',
       NOW (),
       1,
       'JMARSDEN'
;

INSERT INTO party_swift_router
SELECT 'CMP4',
       'BRSCJPJTXXX',
       'A',
       NOW (),
       1,
       'JMARSDEN'
;

/* Sample Data for HK Template */

INSERT INTO party_swift_router
SELECT 'CMPX-HK',
       'BRSCHKHHXXX',
       'A',
       NOW (),
       1,
       'JMARSDEN'
;
