CREATE TABLE IF NOT EXISTS instr (
    instr_ref varchar(12) not null constraint instr_pkey primary key,
    instr_type varchar(4),
    template_ref varchar(12),
    instr_short_name varchar(50),
    instr_long_name varchar(40),
    active_ind varchar(1),
    issu_date date,
    issu_price double precision,
    matu_date date,
    matu_price double precision,
    denom_ccy varchar(12),
    price_dec double precision,
    price_div double precision,
    price_mul double precision,
    price_type varchar(4),
    tick_value double precision,
    book_ref varchar(12),
    market_ref varchar(12),
    lot_size integer,
    qty_dec_places integer,
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    constraint instr_pkey primary key (instr_ref)
);

alter table
    instr owner to admin;

CREATE TABLE IF NOT EXISTS instr_classification (
    instr_ref varchar(12) not null,
    class_type varchar(4) not null,
    class_code varchar(4),
    user_def varchar(1),
    description varchar(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    constraint instr_classification_pkey primary key (instr_ref, class_type)
);

alter table
    instr_classification owner to admin;

CREATE TABLE IF NOT EXISTS instr_ext_ref (
    instr_ref varchar(12) not null,
    instr_ext_ref_type varchar(4) not null,
    instr_ext_ref varchar(20),
    user_def varchar(1),
    description varchar(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    constraint instr_ext_ref_pkey primary key (instr_ref, instr_ext_ref_type)
);

alter table
    instr_ext_ref owner to admin;

CREATE TABLE IF NOT EXISTS instr_flag (
    instr_ref varchar(12) not null,
    flag_type integer not null,
    flag_code varchar(4) not null,
    user_def varchar(1),
    description varchar(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    constraint instr_flag_pkey primary key (instr_ref, flag_type, flag_code)
);

alter table
    instr_flag owner to admin;

CREATE TABLE IF NOT EXISTS instr_narrative (
    instr_ref varchar(12) not null,
    narr_type varchar(4) not null,
    narrative varchar(255),
    user_def varchar(1),
    description varchar(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    constraint instr_narrative_pkey primary key (instr_ref, narr_type)
);

alter table
    instr_narrative owner to admin;

CREATE TABLE IF NOT EXISTS instr_date (
    instr_ref varchar(12) not null,
    date_type varchar(4) not null,
    date date,
    user_def varchar(1),
    description varchar(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    constraint instr_date_pkey primary key (instr_ref, date_type)
);

alter table
    instr_date owner to admin;

CREATE TABLE IF NOT EXISTS instr_accrual (
    instr_ref varchar(12) not null,
    seq_no integer not null,
    accr_basis varchar(4),
    amort_flag varchar(1),
    capi_flag varchar(1),
    paym_ccy varchar(3),
    start_accr_date date,
    first_paym_date date,
    last_paym_date date,
    frn_flag varchar(1),
    neg_flag varchar(1),
    freq_rule varchar(1),
    freq_unit integer,
    cal_code varchar(4),
    date_rule varchar(4),
    eom_flag varchar(1),
    cpon_rate double precision,
    rnd_rule varchar(4),
    rdat_offset integer,
    user_def varchar(1),
    description varchar(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    constraint instr_accrual_pkey primary key (instr_ref, seq_no)
);

alter table
    instr_accrual owner to admin;

CREATE TABLE IF NOT EXISTS public.environment
(
    environment character varying(15) NOT NULL,
    description character varying(30),
    sst_nestjsserver_url character varying(30),
    sst_pythonserver_url character varying(30),
    sst_springserver_url character varying(30),
    active character(1),
    CONSTRAINT environment_pkey PRIMARY KEY (environment)
)

TABLESPACE pg_default;

ALTER TABLE public.environment
    OWNER to admin;

CREATE TABLE IF NOT EXISTS kanbantask (
    id varchar(8) not null constraint kanban_pkey primary key,
    title varchar(40),
    status varchar(10),
    summary varchar(60),
    type varchar(20),
    priority varchar(6),
    tags varchar(20),
    estimate integer,
    assignee varchar(20),
    rankid integer,
    color varchar(7),
    classname varchar(50)
);

alter table
    kanbantask owner to admin;

CREATE TABLE IF NOT EXISTS kb_status (
    status varchar(10) not null constraint kb_status_pkey primary key,
    updatedte date,
    updateusr varchar(10)
);

alter table
    kb_status owner to admin;

CREATE TABLE IF NOT EXISTS kb_type (
    type varchar(10) not null constraint kb_type_pkey primary key,
    updatedte date,
    updateusr varchar(10)
);

alter table
    kb_type owner to admin;

CREATE TABLE IF NOT EXISTS kb_priority (
    priority varchar(6) not null constraint kb_priority_key primary key,
    updatedte date,
    updateusr varchar(10)
);

alter table
    kb_priority owner to admin;

CREATE TABLE IF NOT EXISTS public.party
(
    party_ref character varying(12) NOT NULL,
    party_type character varying(4),
    party_short_name character varying(20),
    party_long_name character varying(40),
    party_extra_long_name character varying(40),
    active_ind character varying(1),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_pkey PRIMARY KEY (party_ref)
)

TABLESPACE pg_default;

ALTER TABLE public.party
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_addr
(
    party_ref character(12) NOT NULL,
    addr_type character(4) NOT NULL,
    contact_name character varying(35) NOT NULL,
    contact_title character varying(35) NOT NULL,
    addr_line1 character varying(35) NOT NULL,
    addr_line2 character varying(35) NOT NULL,
    addr_line3 character varying(35) NOT NULL,
    addr_line4 character varying(35) NOT NULL,
    addr_line5 character varying(35) NOT NULL,
    addr_line6 character varying(35) NOT NULL,
    post_code character varying(12) NOT NULL,
    int_dial_code character varying(6) NOT NULL,
    phone_no character varying(20) NOT NULL,
    fax_no character varying(20) NOT NULL,
    email character varying(100) NOT NULL,
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_addr_pkey PRIMARY KEY (party_ref, addr_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_addr
    OWNER to admin;

-- Table: public.party_assoc

-- DROP TABLE public.party_assoc;

CREATE TABLE IF NOT EXISTS public.party_assoc
(
    party_ref character varying(12) NOT NULL,
    assoc_type character varying(4) NOT NULL,
    assoc_party_ref character varying(12),
    user_def character varying(1),
    description character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_assoc_pkey PRIMARY KEY (party_ref, assoc_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_assoc
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_audit
(
    party_ref character varying(12) NOT NULL,
    party_data text,
    party_ext_ref_data text,
    party_classification_data text,
    party_flag_data text,
    party_narrative_data text,
    party_assoc_data text,
    party_instr_data text,
    party_ssi_data text,
    party_date_data text,
    party_address_data text,
    party_template_data text,
    party_class_assoc_data text,
    party_netting_data text,
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_data_pkey PRIMARY KEY (party_ref, version_no)
)

TABLESPACE pg_default;

ALTER TABLE public.party_audit
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_classification
(
    party_ref character varying(12) NOT NULL,
    class_type character varying(4) NOT NULL,
    class_code character varying(4),
    user_def character varying(1),
    description character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_classification_pkey PRIMARY KEY (party_ref, class_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_classification
    OWNER to admin;


CREATE TABLE IF NOT EXISTS public.party_data_pushed
(
    party_ref character varying(12) NOT NULL,
    environment character varying(15) NOT NULL,
    party_template_data text,
    party_class_assoc_data text,
    party_netting_data text,
    version_date timestamp NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_data_pushed_pkey PRIMARY KEY (party_ref,environment)
)

TABLESPACE pg_default;

ALTER TABLE public.party_data_pushed
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_date
(
    party_ref character(12) NOT NULL,
    date_type character(4) NOT NULL,
    date character(10) NOT NULL,
    "time" character(8) NOT NULL,
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_date_pkey PRIMARY KEY (party_ref, date_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_date
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_ext_ref
(
    party_ref character varying(12) NOT NULL,
    party_ext_ref_type character varying(4) NOT NULL,
    party_ext_ref character varying(20),
    user_def character varying(1),
    description character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_ext_ref_pkey PRIMARY KEY (party_ref, party_ext_ref_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_ext_ref
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_flag
(
    party_ref character varying(12) NOT NULL,
    flag_type integer NOT NULL,
    flag_code character varying(4) NOT NULL,
    user_def character varying(1),
    description character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_flag_pkey PRIMARY KEY (party_ref, flag_type, flag_code)
)

TABLESPACE pg_default;

ALTER TABLE public.party_flag
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_instr
(
    party_ref character varying(12) NOT NULL,
    instr_type character varying(4) NOT NULL,
    instr_ref_type character varying(4),
    instr_ref character varying(12),
    user_def character varying(1),
    description character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_instr_pkey PRIMARY KEY (party_ref, instr_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_instr
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_narrative
(
    party_ref character varying(12) NOT NULL,
    narr_type character varying(4) NOT NULL,
    narrative character varying(255),
    user_def character varying,
    description character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_narrative_pkey PRIMARY KEY (party_ref, narr_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_narrative
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_ssi
(
    party_ref character varying(12) NOT NULL,
    depot_alias character varying(12) NOT NULL,
    depot_descr character varying(35),
    depot_type character varying(6),
    ccy character varying(12),
    comms_service character varying(12),
    dacc_ref character varying(12),
    account_no character varying(35),
    account_name character varying(35),
    depo_ref character varying(12),
    active_ind character varying(1),
    user_def character varying(1),
    description character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT party_ssi_pkey PRIMARY KEY (party_ref, depot_alias)
)

TABLESPACE pg_default;

ALTER TABLE public.party_ssi
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_swift_router
(
    party_ref character varying(12) NOT NULL,
    company_name character(8) NOT NULL,
    logical_term_id character varying(1)[],
    queue_mgr character varying(255) NOT NULL,
    incoming_queue character varying(255) NOT NULL,
    outgoing_queue character varying(255) NOT NULL,
    channel character varying(255) NOT NULL,
    host character varying(255) NOT NULL,
    port_number integer NOT NULL,
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    branch_code character varying(3),
    CONSTRAINT party_swift_router_pkey PRIMARY KEY (party_ref)
)

TABLESPACE pg_default;

ALTER TABLE public.party_swift_router
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_template
(
    party_ref character varying(12) NOT NULL,
    template_party_ref character varying(12) NOT NULL,
    party_short_name character varying(20),
    party_long_name character varying(40),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT template_partypkey PRIMARY KEY (party_ref)
)

TABLESPACE pg_default;

ALTER TABLE public.party_template
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public."User"
(
    userid text NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    email text NOT NULL,
    password text NOT NULL,
    firstname text,
    lastname text,
    role "Role" NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (userid)
)

TABLESPACE pg_default;

ALTER TABLE public."User"
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.class_assoc
(
    party_ref character(4) NOT NULL,
    class_assoc_code character(4) NOT NULL,
    code_type character (1) NOT NULL,
    class_1 integer NOT NULL,
    code_1 character(4) NOT NULL,
    class_2 integer NOT NULL,
    code_2 character(4)[] NOT NULL,
    applied boolean NOT NULL,
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT class_assoc_pkey PRIMARY KEY (party_ref, class_assoc_code,code_type, class_1, code_1, class_2)
)

TABLESPACE pg_default;

ALTER TABLE public.class_assoc
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.gloss_codes
(
    class_value integer NOT NULL,
    code_value character(4) NOT NULL,
    code_short_desc character varying(100),
    code_long_desc character varying(100),
    active_ind "char",
    CONSTRAINT gloss_codes_pkey PRIMARY KEY (class_value, code_value)
)

TABLESPACE pg_default;

ALTER TABLE public.gloss_codes
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.gloss_scheduler
(
    msg_type integer NOT NULL,
    event_ref character(12) NOT NULL,
    database_type character(4) NOT NULL,
    database_code character(4) NOT NULL,
    sql_db_code character(12) NOT NULL,
    bus_day character(1) NOT NULL,
    holiday_id character(4) NOT NULL,
    frequency_unit character(1) NOT NULL,
    frequency_interval integer NOT NULL,
    frequency_start_time time NOT NULL,
    frequency_end_time time NOT NULL,
    due_date_time timestamp NOT NULL,
    start_by_unit character(1) NOT NULL,
    start_by_interval integer NOT NULL,
    end_by_interval integer NOT NULL,
    use_current_date character(1) NOT NULL,
    active_ind_p2k character(1),
    start_by_time time NOT NULL,
    end_by_time time NOT NULL,
    batch_size integer NOT NULL,
    supercede character(1) NOT NULL,
    dst_region_code character(4),
    version_date timestamp NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) NOT NULL,
    CONSTRAINT scheduler PRIMARY KEY (msg_type, event_ref, due_date_time, database_code)
)

TABLESPACE pg_default;

ALTER TABLE public.gloss_scheduler
    OWNER to admin;

CREATE TABLE IF NOT EXISTS gloss_netting(
   party_ref                    character(12)           NOT NULL,
   net_driver                   character(4)            NOT NULL,
   settle_code                  character(4)            NOT NULL,
   transaction_type             character(4)            NOT NULL,
   trade_group                  integer                 NOT NULL,
   late_rule                    character(4)            NOT NULL,
   net_schedule_code            character(4)            NOT NULL,
   date_type                    character(4)            NOT NULL,
   buy_and_sell_flag            character(1)            NOT NULL,
   net_party_ref                character(12)           NOT NULL,
   net_book                     character(12)           NOT NULL,
   override_net_book            character(1)            NOT NULL,
   secondary_party              character(12)           NOT NULL,
   settle_terms                 character(4)            NOT NULL,
   operation_type               character(4)            NOT NULL,
   net_primary                  character(1)            NOT NULL,
   primary_comp_service         character(12)           NOT NULL,
   primary_secp_service         character(12)           NOT NULL,
   net_secondary                character(1)            NOT NULL,
   secondary_comp_service       character(12)           NOT NULL,
   secondary_secp_service       character(12)           NOT NULL,
   primary_instr                character(12)           NOT NULL,
   primary_comp_alias           character(12)           NOT NULL,
   primary_depot_type           character(4)            NOT NULL,
   primary_party_ref            character(12)           NOT NULL,
   primary_secp_alias           character(12)           NOT NULL,
   settle_instr                 character(12)           NOT NULL,
   secondary_comp_alias         character(12)           NOT NULL,
   secondary_depot_type         character(4)            NOT NULL,
   secondary_party_ref          character(12)           NOT NULL,
   secondary_secp_alias         character(12)           NOT NULL,
   market_party                 character(12)           NOT NULL,
   start_date_type              character(4)            NOT NULL,
   start_offset_ind             character(1)            NOT NULL,
   start_offset_code            character(4)            NOT NULL,
   end_date_type                character(4)            NOT NULL,
   end_offset_ind               character(1)            NOT NULL,
   end_offset_code              character(4)            NOT NULL,
   net_cash_when_zero_stock     character(1)            NOT NULL,
   split_buy_sell               character(1)            NOT NULL,
   version_date timestamp NOT NULL,
   version_no integer NOT NULL,
   version_user character varying(12) NOT NULL,
   CONSTRAINT gloss_netting_pkey PRIMARY KEY (party_ref, net_driver,settle_code, transaction_type)
)

TABLESPACE pg_default;

ALTER TABLE public.gloss_netting
    OWNER to admin;

