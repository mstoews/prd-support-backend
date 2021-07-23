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
    version_date date,
    version_no integer,
    version_user varchar(12)
);

alter table
    instr owner to admin;

CREATE TABLE IF NOT EXISTS instr_classification (
    instr_ref varchar(12) not null,
    class_type varchar(4) not null,
    class_code varchar(4),
    user_def varchar(1),
    description varchar(40),
    version_date date,
    version_no integer,
    version_user varchar(12),
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
    version_date date,
    version_no integer,
    version_user varchar(12),
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
    version_date date,
    version_no integer,
    version_user varchar(12),
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
    version_date date,
    version_no integer,
    version_user varchar(12),
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
    version_date date,
    version_no integer,
    version_user varchar(12),
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
    version_date date,
    version_no integer,
    version_user varchar(12),
    constraint instr_accrual_pkey primary key (instr_ref, seq_no)
);

alter table
    instr_accrual owner to admin;

CREATE TABLE IF NOT EXISTS public.environment
(
    environment character varying(10) COLLATE pg_catalog."default" NOT NULL,
    image character varying(255) COLLATE pg_catalog."default",
    description character varying(30) COLLATE pg_catalog."default",
    usr character varying(15) COLLATE pg_catalog."default",
    backend_url character varying(30) COLLATE pg_catalog."default",
    active character(1) COLLATE pg_catalog."default",
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
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    party_type character varying(4) COLLATE pg_catalog."default",
    party_short_name character varying(20) COLLATE pg_catalog."default",
    party_long_name character varying(40) COLLATE pg_catalog."default",
    party_extra_long_name character varying(40) COLLATE pg_catalog."default",
    active_ind character varying(1) COLLATE pg_catalog."default",
    version_date date,
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_pkey PRIMARY KEY (party_ref)
)

TABLESPACE pg_default;

ALTER TABLE public.party
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_addr
(
    party_ref character(12) COLLATE pg_catalog."default" NOT NULL,
    addr_type character(4) COLLATE pg_catalog."default" NOT NULL,
    contact_name character varying(35) COLLATE pg_catalog."default" NOT NULL,
    contact_title character varying(35) COLLATE pg_catalog."default" NOT NULL,
    addr_line1 character varying(35) COLLATE pg_catalog."default" NOT NULL,
    addr_line2 character varying(35) COLLATE pg_catalog."default" NOT NULL,
    addr_line3 character varying(35) COLLATE pg_catalog."default" NOT NULL,
    addr_line4 character varying(35) COLLATE pg_catalog."default" NOT NULL,
    addr_line5 character varying(35) COLLATE pg_catalog."default" NOT NULL,
    addr_line6 character varying(35) COLLATE pg_catalog."default" NOT NULL,
    post_code character varying(12) COLLATE pg_catalog."default" NOT NULL,
    int_dial_code character varying(6) COLLATE pg_catalog."default" NOT NULL,
    phone_no character varying(20) COLLATE pg_catalog."default" NOT NULL,
    fax_no character varying(20) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    version_date date NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT party_addr_pkey PRIMARY KEY (party_ref, addr_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_addr
    OWNER to admin;

-- Table: public.party_assoc

-- DROP TABLE public.party_assoc;

CREATE TABLE IF NOT EXISTS public.party_assoc
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    assoc_type character varying(4) COLLATE pg_catalog."default" NOT NULL,
    assoc_party_ref character varying(12) COLLATE pg_catalog."default",
    user_def character varying(1) COLLATE pg_catalog."default",
    description character varying(40) COLLATE pg_catalog."default",
    version_date date,
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_assoc_pkey PRIMARY KEY (party_ref, assoc_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_assoc
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_audit
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    party_data text COLLATE pg_catalog."default",
    party_ext_ref_data text COLLATE pg_catalog."default",
    party_classification_data text COLLATE pg_catalog."default",
    party_flag_data text COLLATE pg_catalog."default",
    party_narrative_data text COLLATE pg_catalog."default",
    party_assoc_data text COLLATE pg_catalog."default",
    party_instr_data text COLLATE pg_catalog."default",
    party_ssi_data text COLLATE pg_catalog."default",
    party_date_data text COLLATE pg_catalog."default",
    party_address_data text COLLATE pg_catalog."default",
    party_template_data text COLLATE pg_catalog."default",
    party_class_assoc_data text COLLATE pg_catalog."default",
    version_date timestamp without time zone NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_data_pkey PRIMARY KEY (party_ref, version_no)
)

TABLESPACE pg_default;

ALTER TABLE public.party_audit
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_classification
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    class_type character varying(4) COLLATE pg_catalog."default" NOT NULL,
    class_code character varying(4) COLLATE pg_catalog."default",
    user_def character varying(1) COLLATE pg_catalog."default",
    description character varying(40) COLLATE pg_catalog."default",
    version_date date,
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_classification_pkey PRIMARY KEY (party_ref, class_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_classification
    OWNER to admin;


CREATE TABLE IF NOT EXISTS public.party_data_pushed
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    party_template_data text COLLATE pg_catalog."default",
    party_class_assoc_data text COLLATE pg_catalog."default",
    party_swift_data text COLLATE pg_catalog."default",
    version_date timestamp without time zone NOT NULL,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_data_pushed_pkey PRIMARY KEY (party_ref)
)

TABLESPACE pg_default;

ALTER TABLE public.party_data_pushed
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_date
(
    party_ref character(12) COLLATE pg_catalog."default" NOT NULL,
    date_type character(4) COLLATE pg_catalog."default" NOT NULL,
    date character(10) COLLATE pg_catalog."default" NOT NULL,
    "time" character(8) COLLATE pg_catalog."default" NOT NULL,
    version_date date NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT party_date_pkey PRIMARY KEY (party_ref, date_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_date
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_ext_ref
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    party_ext_ref_type character varying(4) COLLATE pg_catalog."default" NOT NULL,
    party_ext_ref character varying(20) COLLATE pg_catalog."default",
    user_def character varying(1) COLLATE pg_catalog."default",
    description character varying(40) COLLATE pg_catalog."default",
    version_date date,
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_ext_ref_pkey PRIMARY KEY (party_ref, party_ext_ref_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_ext_ref
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_flag
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    flag_type integer NOT NULL,
    flag_code character varying(4) COLLATE pg_catalog."default" NOT NULL,
    user_def character varying(1) COLLATE pg_catalog."default",
    description character varying(40) COLLATE pg_catalog."default",
    version_date date DEFAULT now(),
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_flag_pkey PRIMARY KEY (party_ref, flag_type, flag_code)
)

TABLESPACE pg_default;

ALTER TABLE public.party_flag
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_instr
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    instr_type character varying(4) COLLATE pg_catalog."default" NOT NULL,
    instr_ref_type character varying(4) COLLATE pg_catalog."default",
    instr_ref character varying(12) COLLATE pg_catalog."default",
    user_def character varying(1) COLLATE pg_catalog."default",
    description character varying(40) COLLATE pg_catalog."default",
    version_date date,
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_instr_pkey PRIMARY KEY (party_ref, instr_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_instr
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_narrative
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    narr_type character varying(4) COLLATE pg_catalog."default" NOT NULL,
    narrative character varying(255) COLLATE pg_catalog."default",
    user_def character varying COLLATE pg_catalog."default",
    description character varying(40) COLLATE pg_catalog."default",
    version_date date DEFAULT now(),
    version_no integer DEFAULT 1,
    version_user character varying(12) COLLATE pg_catalog."default" DEFAULT USER,
    CONSTRAINT party_narrative_pkey PRIMARY KEY (party_ref, narr_type)
)

TABLESPACE pg_default;

ALTER TABLE public.party_narrative
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_ssi
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    depot_alias character varying(12) COLLATE pg_catalog."default" NOT NULL,
    depot_descr character varying(35) COLLATE pg_catalog."default",
    depot_type character varying(6) COLLATE pg_catalog."default",
    comms_service character varying(12) COLLATE pg_catalog."default",
    dacc_ref character varying(12) COLLATE pg_catalog."default",
    account_no character varying(35) COLLATE pg_catalog."default",
    account_name character varying(35) COLLATE pg_catalog."default",
    depo_ref character varying(12) COLLATE pg_catalog."default",
    active_ind character varying(1) COLLATE pg_catalog."default",
    user_def character varying(1) COLLATE pg_catalog."default",
    description character varying(40) COLLATE pg_catalog."default",
    version_date date,
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT party_ssi_pkey PRIMARY KEY (party_ref, depot_alias)
)

TABLESPACE pg_default;

ALTER TABLE public.party_ssi
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_swift_router
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    company_name character(8) COLLATE pg_catalog."default" NOT NULL,
    logical_term_id character varying(1)[] COLLATE pg_catalog."default",
    queue_mgr character varying(255) COLLATE pg_catalog."default" NOT NULL,
    incoming_queue character varying(255) COLLATE pg_catalog."default" NOT NULL,
    outgoing_queue character varying(255) COLLATE pg_catalog."default" NOT NULL,
    channel character varying(255) COLLATE pg_catalog."default" NOT NULL,
    host character varying(255) COLLATE pg_catalog."default" NOT NULL,
    port_number integer NOT NULL,
    version_date date NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) COLLATE pg_catalog."default" NOT NULL,
    branch_code character varying(3) COLLATE pg_catalog."default",
    CONSTRAINT party_swift_router_pkey PRIMARY KEY (party_ref)
)

TABLESPACE pg_default;

ALTER TABLE public.party_swift_router
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.party_template
(
    party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    template_party_ref character varying(12) COLLATE pg_catalog."default" NOT NULL,
    party_short_name character varying(20) COLLATE pg_catalog."default",
    party_long_name character varying(40) COLLATE pg_catalog."default",
    version_date date,
    version_no integer,
    version_user character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT template_partypkey PRIMARY KEY (party_ref)
)

TABLESPACE pg_default;

ALTER TABLE public.party_template
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public."User"
(
    userid text COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    firstname text COLLATE pg_catalog."default",
    lastname text COLLATE pg_catalog."default",
    role "Role" NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (userid)
)

TABLESPACE pg_default;

ALTER TABLE public."User"
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.class_assoc
(
    party_ref character(4) COLLATE pg_catalog."default" NOT NULL,
    class_assoc_code character(4) COLLATE pg_catalog."default" NOT NULL,
    assoc_code_description character varying(50) COLLATE pg_catalog."default" NOT NULL,
    main_class integer NOT NULL,
    main_code character(4) COLLATE pg_catalog."default" NOT NULL,
    sub_class integer NOT NULL,
    sub_code character(4) COLLATE pg_catalog."default" NOT NULL,
    description character varying(50) COLLATE pg_catalog."default" NOT NULL,
    user_def character(1) COLLATE pg_catalog."default" NOT NULL,
    applied boolean NOT NULL,
    version_date date NOT NULL,
    version_no integer NOT NULL,
    version_user character varying(12) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT class_assoc_pkey PRIMARY KEY (party_ref, class_assoc_code, main_class, main_code, sub_class, sub_code)
)

TABLESPACE pg_default;

ALTER TABLE public.class_assoc
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.gloss_codes
(
    class_value integer NOT NULL,
    code_value character(4) COLLATE pg_catalog."default" NOT NULL,
    code_short_desc character varying(100) COLLATE pg_catalog."default",
    code_long_desc character varying(100) COLLATE pg_catalog."default",
    active_ind "char",
    CONSTRAINT gloss_codes_pkey PRIMARY KEY (class_value, code_value)
)

TABLESPACE pg_default;

ALTER TABLE public.gloss_codes
    OWNER to admin;

CREATE TABLE IF NOT EXISTS public.gloss_scheduler
(
    msg_type integer NOT NULL,
    event_ref character(12) COLLATE pg_catalog."default" NOT NULL,
    database_type character(4) COLLATE pg_catalog."default" NOT NULL,
    database_code character(4) COLLATE pg_catalog."default" NOT NULL,
    sql_db_code character(12) COLLATE pg_catalog."default" NOT NULL,
    bus_day character(1) COLLATE pg_catalog."default" NOT NULL,
    holiday_id character(4) COLLATE pg_catalog."default" NOT NULL,
    frequency_unit character(1) COLLATE pg_catalog."default" NOT NULL,
    frequency_interval integer NOT NULL,
    frequency_start_time time NOT NULL,
    frequency_end_time time NOT NULL,
    due_date_time time NOT NULL,
    start_by_unit character(1) COLLATE pg_catalog."default" NOT NULL,
    start_by_interval integer NOT NULL,
    end_by_interval integer NOT NULL,
    use_current_date character(1) COLLATE pg_catalog."default" NOT NULL,
    active_ind_p2k character(1) COLLATE pg_catalog."default",
    start_by_time time NOT NULL,
    end_by_time time NOT NULL,
    batch_size integer NOT NULL,
    supercede character(1) COLLATE pg_catalog."default" NOT NULL,
    dst_region_code character(4) COLLATE pg_catalog."default",
    version_no integer NOT NULL,
    version_date date NOT NULL,
    version_user character(12) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT scheduler PRIMARY KEY (msg_type, event_ref, due_date_time, database_code)
)

TABLESPACE pg_default;

ALTER TABLE public.gloss_scheduler
    OWNER to admin;