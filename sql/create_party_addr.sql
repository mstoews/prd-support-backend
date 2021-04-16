CREATE TABLE IF NOT EXISTS party_addr
(
    party_ref         CHAR(12)        NOT NULL,    /* Stores the company ref e.g. CMP4 */
    addr_type         CHAR(4)         NOT NULL,    /* HEAD - Default Settle Date etc */
    contact_name      VARCHAR(35)     NOT NULL,
    contact_title     VARCHAR(35)     NOT NULL,
    addr_line1        VARCHAR(35)     NOT NULL,
    addr_line2        VARCHAR(35)     NOT NULL,
    addr_line3        VARCHAR(35)     NOT NULL,
    addr_line4        VARCHAR(35)     NOT NULL,
    addr_line5        VARCHAR(35)     NOT NULL,
    addr_line6        VARCHAR(35)     NOT NULL,
    post_code         VARCHAR(12)     NOT NULL,
    int_dial_code     VARCHAR(6)      NOT NULL,
    phone_no          VARCHAR(20)     NOT NULL,
    fax_no            VARCHAR(20)     NOT NULL,
    email             VARCHAR(100)    NOT NULL,
    version_date      DATE            NOT NULL,
    version_no        INT             NOT NULL,
    version_user      VARCHAR(12)     NOT NULL,

    PRIMARY KEY (party_ref, addr_type)
);

DELETE FROM party_addr WHERE party_ref = 'CMPX-JP';

INSERT INTO party_addr
SELECT 'CMPX-JP',
       'HEAD',
       'YUMIKO YOSHIOKA', 
       'ADMINISTRATION DEPT',
       '7F S-GATE AKASAKA SANNO',
       '2-5-1 AKASAKA',
       'MINATO-KU',
       'TOKYO',
       '',
       '',
       '107-0052',
       '+81',
       '03-5797-8300',
       '03-5561-8538',
       'yumiko.yoshioka@broadridge.com',
       NOW (),
       1,
       'JMARSDEN'
;