/* Maps to Instr XML Main */

DROP TABLE if exists party;

CREATE TABLE instr
(
     instr_ref              VARCHAR(12),
     instr_type             VARCHAR(4),
     template_ref           VARCHAR(12),
     instr_short_name       VARCHAR(50),
     instr_long_name        VARCHAR(40),
     active_ind             VARCHAR(1),
     issu_date              DATE,
     issu_price             FLOAT,
     matu_date              DATE,
     matu_price             FLOAT,
     denom_ccy              VARCHAR(12),
     price_dec              FLOAT,
     price_div              FLOAT,
     price_mul              FLOAT,
     price_type             VARCHAR(4),
     tick_value             FLOAT,
     book_ref               VARCHAR(12),
     market_ref             VARCHAR(12),
     lot_size               INT,
     qty_dec_places         INT,
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12),

     PRIMARY KEY (instr_ref)
)
;

/* Maps to Instr.Classification */

DROP TABLE IF EXISTS instr_classification
;

CREATE TABLE instr_classification
(
     instr_ref              VARCHAR(12),
     class_type             VARCHAR(4),
     class_code             VARCHAR(4),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12),

     PRIMARY KEY (instr_ref, class_type)
)
;

/* Maps to Instr.Reference */

DROP TABLE IF EXISTS instr_ext_ref
;

CREATE TABLE instr_ext_ref
(
     instr_ref              VARCHAR(12),
     instr_ext_ref_type     VARCHAR(4),
     instr_ext_ref          VARCHAR(20),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12),

     PRIMARY KEY (instr_ref, instr_ext_ref_type)
)
;

/* Maps to Instrument.Flag */

DROP TABLE IF EXISTS instr_flag
;

CREATE TABLE instr_flag
(
     instr_ref              VARCHAR(12),
     flag_type              INT,
     flag_code              VARCHAR(4),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12),

     PRIMARY KEY (instr_ref, flag_type, flag_code)
)
;

/* Maps to Instrument.Narrative */

DROP TABLE IF EXISTS instr_narrative
;

CREATE TABLE instr_narrative
(
     instr_ref              VARCHAR(12),
     narr_type              VARCHAR(4),
     narrative              VARCHAR(255),
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12),

     PRIMARY KEY (instr_ref, narr_type)
)
;

/* Maps to Instrument.Date */

DROP TABLE IF EXISTS instr_date
;

CREATE TABLE instr_date
(
     instr_ref              VARCHAR(12),
     date_type              VARCHAR(4),
     date                   DATE,
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12),

     PRIMARY KEY (instr_ref, date_type)
)
;

/* Maps to Instrument.AccrualDetails */
/* Maps to Instrument.AccrualDetails.PaymentSchedule */

DROP TABLE IF EXISTS instr_accrual
;

CREATE TABLE instr_accrual
(
     instr_ref              VARCHAR(12),
     seq_no                 INT,
     accr_basis             VARCHAR(4),
     amort_flag             VARCHAR(1),
     capi_flag              VARCHAR(1),
     paym_ccy               VARCHAR(3),
     start_accr_date        DATE,
     first_paym_date        DATE,
     last_paym_date         DATE,
     frn_flag               VARCHAR(1), /* Y or N */
     neg_flag               VARCHAR(1),
     freq_rule              VARCHAR(1), /* D, M or Y */
     freq_unit              INT,
     cal_code               VARCHAR(4),
     date_rule              VARCHAR(4),
     eom_flag               VARCHAR(1), /* Y or N */
     cpon_rate              FLOAT,
     rnd_rule               VARCHAR(4),
     rdat_offset            INT,
     user_def               VARCHAR(1),
     description            VARCHAR(40),
     version_date           DATE,
     version_no             INT,
     version_user           VARCHAR(12),

     PRIMARY KEY (instr_ref, seq_no)
)
;

