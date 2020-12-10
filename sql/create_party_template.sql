/* Maps to Party XML Main */

DROP TABLE if exists party;

CREATE TABLE party
(
     party_ref              VARCHAR(12),
     party_type             VARCHAR(4),
     party_short_name       VARCHAR(20),
     party_long_name        VARCHAR(40),
     party_extra_long_name  VARCHAR(40),
     active_ind             VARCHAR(1),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)

;

/* Maps to Party.Classification */

DROP TABLE party_classification
;

CREATE TABLE party_classification
(
     party_ref              VARCHAR(12),
     class_type             VARCHAR(4),
     class_code             VARCHAR(4),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)
;

/* Maps to Party.Reference */

DROP TABLE party_ext_ref
;

CREATE TABLE party_ext_ref
(
     party_ref              VARCHAR(12),
     party_ext_ref_type     VARCHAR(4),
     party_ext_ref          VARCHAR(20),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)
;

/* Maps to Party.Flag */

DROP TABLE party_flag
;

CREATE TABLE party_flag
(
     party_ref              VARCHAR(12),
     flag_type              INT,
     flag_code              VARCHAR(4),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)
;

/* Maps to Party.Narrative */

DROP TABLE party_narrative
;

CREATE TABLE party_narrative
(
     party_ref              VARCHAR(12),
     narr_type              VARCHAR(4),
     narrative              VARCHAR(255),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)
;

/* Maps to Party.Assoc */

DROP TABLE party_assoc
;

CREATE TABLE party_assoc
(
     party_ref              VARCHAR(12),
     assoc_type             VARCHAR(4),
     assoc_party_ref        VARCHAR(12),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)
;

/* Maps to Party.Instrument */

DROP TABLE party_instr
;

CREATE TABLE party_instr
(
     party_ref              VARCHAR(12),
     instr_type             VARCHAR(4),
     instr_ref_type         VARCHAR(4),
     instr_ref              VARCHAR(12),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)
;

DROP TABLE party_ssi
;

/* Maps to SSI */

CREATE TABLE party_ssi
(
     party_ref              VARCHAR(12),
     depot_alias            VARCHAR(12),
     depot_descr            VARCHAR(35),
     depot_type             VARCHAR(6), /* Depot, Nostro, Both */
     comms_service          VARCHAR(12),
     dacc_ref               VARCHAR(12),/* DACC Party - only for Comp Aliases */
     account_no             VARCHAR(35),
     account_name           VARCHAR(35),
     depo_ref               VARCHAR(12),/* Location */
     active_ind             VARCHAR(1),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12)
)
;
