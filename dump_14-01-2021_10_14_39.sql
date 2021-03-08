--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE prisma;
DROP DATABASE public;




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md574fd9b4f4d8aa5fda0cd27a632361f79';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 12.5 (Debian 12.5-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 12.5 (Debian 12.5-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: environment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.environment (
    environment character varying(10) NOT NULL,
    image character varying(255),
    description character varying(30),
    usr character varying(15),
    active character(1)
);


ALTER TABLE public.environment OWNER TO postgres;

--
-- Name: instr; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instr (
    instr_ref character varying(12) NOT NULL,
    instr_type character varying(4),
    template_ref character varying(12),
    instr_short_name character varying(50),
    instr_long_name character varying(40),
    active_ind character varying(1),
    issu_date date,
    issu_price double precision,
    matu_date date,
    matu_price double precision,
    denom_ccy character varying(12),
    price_dec double precision,
    price_div double precision,
    price_mul double precision,
    price_type character varying(4),
    tick_value double precision,
    book_ref character varying(12),
    market_ref character varying(12),
    lot_size integer,
    qty_dec_places integer,
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.instr OWNER TO postgres;

--
-- Name: instr_accrual; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instr_accrual (
    instr_ref character varying(12) NOT NULL,
    seq_no integer NOT NULL,
    accr_basis character varying(4),
    amort_flag character varying(1),
    capi_flag character varying(1),
    paym_ccy character varying(3),
    start_accr_date date,
    first_paym_date date,
    last_paym_date date,
    frn_flag character varying(1),
    neg_flag character varying(1),
    freq_rule character varying(1),
    freq_unit integer,
    cal_code character varying(4),
    date_rule character varying(4),
    eom_flag character varying(1),
    cpon_rate double precision,
    rnd_rule character varying(4),
    rdat_offset integer,
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.instr_accrual OWNER TO postgres;

--
-- Name: instr_classification; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instr_classification (
    instr_ref character varying(12) NOT NULL,
    class_type character varying(4) NOT NULL,
    class_code character varying(4),
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.instr_classification OWNER TO postgres;

--
-- Name: instr_date; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instr_date (
    instr_ref character varying(12) NOT NULL,
    date_type character varying(4) NOT NULL,
    date date,
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.instr_date OWNER TO postgres;

--
-- Name: instr_ext_ref; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instr_ext_ref (
    instr_ref character varying(12) NOT NULL,
    instr_ext_ref_type character varying(4) NOT NULL,
    instr_ext_ref character varying(20),
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.instr_ext_ref OWNER TO postgres;

--
-- Name: instr_flag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instr_flag (
    instr_ref character varying(12) NOT NULL,
    flag_type integer NOT NULL,
    flag_code character varying(4) NOT NULL,
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.instr_flag OWNER TO postgres;

--
-- Name: instr_narrative; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instr_narrative (
    instr_ref character varying(12) NOT NULL,
    narr_type character varying(4) NOT NULL,
    narrative character varying(255),
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.instr_narrative OWNER TO postgres;

--
-- Name: party; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party (
    party_ref character varying(12) NOT NULL,
    party_type character varying(4),
    party_short_name character varying(20),
    party_long_name character varying(40),
    party_extra_long_name character varying(40),
    active_ind character varying(1),
    version_date date DEFAULT now(),
    version_no integer,
    version_user character(12)
);


ALTER TABLE public.party OWNER TO postgres;

--
-- Name: party_assoc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party_assoc (
    party_ref character varying(12) NOT NULL,
    assoc_type character varying(4) NOT NULL,
    assoc_party_ref character varying(12),
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.party_assoc OWNER TO postgres;

--
-- Name: party_classification; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party_classification (
    party_ref character(12) NOT NULL,
    class_type character(4) NOT NULL,
    class_code character(4),
    user_def character(1),
    description character(40),
    version_date date,
    version_no integer,
    version_user character(12)
);


ALTER TABLE public.party_classification OWNER TO postgres;

--
-- Name: party_ext_ref; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party_ext_ref (
    party_ref character varying(12) NOT NULL,
    party_ext_ref_type character varying(4) NOT NULL,
    party_ext_ref character varying(20),
    user_def character varying,
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.party_ext_ref OWNER TO postgres;

--
-- Name: party_flag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party_flag (
    party_ref character(12) NOT NULL,
    flag_type integer NOT NULL,
    flag_code character(4),
    user_def character(1),
    description character(40),
    version_date date,
    version_no integer,
    version_user character(12)
);


ALTER TABLE public.party_flag OWNER TO postgres;

--
-- Name: party_instr; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party_instr (
    party_ref character(12) NOT NULL,
    instr_ref character(12) NOT NULL,
    instr_type character(4) NOT NULL,
    instr_ref_type character(4),
    user_def character(1),
    description character(40),
    version_date date DEFAULT now(),
    version_no integer,
    version_user character(12)
);


ALTER TABLE public.party_instr OWNER TO postgres;

--
-- Name: party_narrative; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party_narrative (
    party_ref character varying(12) NOT NULL,
    narr_type character varying(4) NOT NULL,
    narrative character varying(255),
    user_def character varying,
    description character varying(40),
    version_date date DEFAULT now(),
    version_no integer DEFAULT 1,
    version_user character varying(12) DEFAULT USER
);


ALTER TABLE public.party_narrative OWNER TO postgres;

--
-- Name: party_ssi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.party_ssi (
    party_ref character varying(12) NOT NULL,
    depot_alias character varying(12) NOT NULL,
    depot_descr character varying(35),
    depot_type character varying(6),
    comms_service character varying(12),
    dacc_ref character varying(12),
    account_no character varying(35),
    account_name character varying(35),
    depo_ref character varying(12),
    active_ind character varying(1),
    user_def character varying(1),
    description character varying(40),
    version_date date,
    version_no integer,
    version_user character varying(12)
);


ALTER TABLE public.party_ssi OWNER TO postgres;

--
-- Name: trades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trades (
    host_reference character varying(12) NOT NULL,
    tref_ext_ref character varying(4) NOT NULL,
    opertion character varying(12) NOT NULL,
    instrument_ref_type character varying(4) NOT NULL,
    quantity integer NOT NULL,
    counterparty character varying(12) NOT NULL,
    trade_price numeric(12,6) NOT NULL,
    trade_time time without time zone,
    value_date date NOT NULL,
    company character varying(12) NOT NULL,
    book character varying(4) NOT NULL,
    trade_currency character varying(4) NOT NULL
);


ALTER TABLE public.trades OWNER TO postgres;

--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, "createdAt", "updatedAt", email, password, firstname, lastname) FROM stdin;
\.


--
-- Data for Name: environment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.environment (environment, image, description, usr, active) FROM stdin;
DEV	hotel-2.jpg	UAT SMALL BUSINESS	TEST USER 2	0
SIT	hotel-1.jpg	SIT SMALL BUSINESS	TEST USER 1	1
\.


--
-- Data for Name: instr; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instr (instr_ref, instr_type, template_ref, instr_short_name, instr_long_name, active_ind, issu_date, issu_price, matu_date, matu_price, denom_ccy, price_dec, price_div, price_mul, price_type, tick_value, book_ref, market_ref, lot_size, qty_dec_places, version_date, version_no, version_user) FROM stdin;
JP9974	EQTY		BELC ORD	BELC ORD SHARES	A	\N	\N	\N	\N	JPY	6	1	1	UC	100	TRADING	JASDAQ	100	0	2020-11-29	1	JMARSDEN
JGB20YR135	DEBT		JGB 20 YR NO 135	JGB 20 YR NO 135	A	2012-04-26	99.83	2032-03-20	100	JPY	6	1	1	PC	100	TRADING	JP DEBT MKT	100	0	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: instr_accrual; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instr_accrual (instr_ref, seq_no, accr_basis, amort_flag, capi_flag, paym_ccy, start_accr_date, first_paym_date, last_paym_date, frn_flag, neg_flag, freq_rule, freq_unit, cal_code, date_rule, eom_flag, cpon_rate, rnd_rule, rdat_offset, user_def, description, version_date, version_no, version_user) FROM stdin;
JGB20YR135	1	JGB	N	N	JPY	2012-04-26	2012-09-20	2032-03-20	N	N	M	6	JPD	FIX	N	1.7	RND0	1	Y	Set accrual details	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: instr_classification; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instr_classification (instr_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) FROM stdin;
JP9974	17	JP	N	Issue Country	2020-11-29	1	JMARSDEN
JP9974	5	QUIK	N	Prefered Instr Ref Type	2020-11-29	1	JMARSDEN
JP9974	8007	STCK	Y	JRR Instr Class	2020-11-29	1	JMARSDEN
JP9974	8065	JPS	N	JASDEC Instr Type	2020-11-29	1	JMARSDEN
JP9974	8011	RESI	N	JRR Issuer Type	2020-11-29	1	JMARSDEN
JP9974	1210	JDEC	N	Settle Code	2020-11-29	1	JMARSDEN
JGB20YR135	17	JP	N	Issue Country	2021-01-01	1	JMARSDEN
JGB20YR135	5	QUIK	N	Prefered Instr Ref Type	2021-01-01	1	JMARSDEN
JGB20YR135	1004	DEBT	N	Accounting Class	2021-01-01	1	JMARSDEN
JGB20YR135	8007	GVLT	Y	JRR Instr Class	2021-01-01	1	JMARSDEN
JGB20YR135	1220	NORM	N	Charge Type	2021-01-01	1	JMARSDEN
JGB20YR135	8011	RESI	N	JRR Issuer Type	2021-01-01	1	JMARSDEN
JGB20YR135	1210	JPGV	N	Settle Code	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: instr_date; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instr_date (instr_ref, date_type, date, user_def, description, version_date, version_no, version_user) FROM stdin;
\.


--
-- Data for Name: instr_ext_ref; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instr_ext_ref (instr_ref, instr_ext_ref_type, instr_ext_ref, user_def, description, version_date, version_no, version_user) FROM stdin;
JP9974	ISIN	JP3105700003	Y	ISIN Code	2020-11-29	1	JMARSDEN
JP9974	QUIK	9974	Y	Quick Code	2020-11-29	1	JMARSDEN
JP9974	SICC	99740	Y	SICC (JASDEC) Code	2020-11-29	1	JMARSDEN
JGB20YR135	ISIN	JP1201351241	Y	ISIN Code	2021-01-01	1	JMARSDEN
JGB20YR135	QUIK	900690135	Y	Quick Code	2021-01-01	1	JMARSDEN
JGB20YR135	SICC	901350069	Y	SICC (JASDEC) Code	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: instr_flag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instr_flag (instr_ref, flag_type, flag_code, user_def, description, version_date, version_no, version_user) FROM stdin;
JP9974	1010	PSMS	N	PSMS Eligible Instr Flag	2020-11-29	1	JMARSDEN
JGB20YR135	1010	PSMS	N	PSMS Eligible Instr Flag	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: instr_narrative; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instr_narrative (instr_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) FROM stdin;
JP9974	IEDE	BELC ORD	Y	English description	2020-11-29	1	JMARSDEN
JP9974	IEDJ	（株）ベルク	Y	Japanese description	2020-11-29	1	JMARSDEN
JP9974	INAM	BELC ORD	Y	Internal description	2020-11-29	1	JMARSDEN
JGB20YR135	IEDE	JGB 20 YR NO 135	Y	English description	2021-01-01	1	JMARSDEN
JGB20YR135	IEDJ	国債20年135回	Y	Japanese description	2021-01-01	1	JMARSDEN
JGB20YR135	INAM	JGB 20 YR NO 135	Y	Internal description	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: party; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party (party_ref, party_type, party_short_name, party_long_name, party_extra_long_name, active_ind, version_date, version_no, version_user) FROM stdin;
CMP4	COMP	BR SEC JAPAN	BR SEC JAPAN	BR SEC JAPAN	A	2021-01-01	1	JMARSDEN    
TRADING	BOOK	TRADING	TRADING	TRADING	A	2021-01-01	1	JMARSDEN    
JASD00	DACC	JASD00	JASD00	JASD00	A	2021-01-01	1	JMARSDEN    
JASD98	DACC	JASD98	JASD98	JASD98	A	2021-01-01	1	JMARSDEN    
JASD60	DACC	JASD60	JASD60	JASD60	A	2021-01-01	1	JMARSDEN    
JASD40	DACC	JASD40	JASD40	JASD40	A	2021-01-01	1	JMARSDEN    
CMP5	COMP	BR SEC JAPAN 12	BR SEC JAPAN	BR SEC JAPAN	A	2020-12-31	2	Admin       
CMP6	COMP	BR SEC JAPAN	BR SEC JAPAN	BR SEC JAPAN	A	2021-01-01	1	JMARSDEN    
CMP7	COMP	BR SEC JAPAN	BR SEC JAPAN	BR SEC JAPAN	A	2021-01-01	1	JMARSDEN    
SECP	SECP	TEST JAPAN	BR SEC JAPAN	BR SEC JAPAN	A	2021-01-01	1	JMARSDEN    
CMP1	SECP	TEST JAPAN	BR SEC JAPAN	BR SEC JAPAN	A	2021-01-01	1	JMARSDEN    
CMP9	COMP	BR SEC JAPAN	BR SEC JAPAN	BR SEC JAPAN	A	2021-01-01	1	JMARSDEN    
\.


--
-- Data for Name: party_assoc; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party_assoc (party_ref, assoc_type, assoc_party_ref, user_def, description, version_date, version_no, version_user) FROM stdin;
JASD00	ASDP	JJSDJPJT	N	Place of Settlement (PSET) Party	2021-01-01	1	JMARSDEN
JASD98	ASDP	JJSDJPJT	N	Place of Settlement (PSET) Party	2021-01-01	1	JMARSDEN
JASD60	ASDP	JJSDJPJT	N	Place of Settlement (PSET) Party	2021-01-01	1	JMARSDEN
JASD40	ASDP	JJSDJPJT	N	Place of Settlement (PSET) Party	2021-01-01	1	JMARSDEN
SECP	ASDP	JJSDJPJT	N	Place of Settlement (PSET) Party	2021-01-01	1	JMARSDEN
CMP1	ASDP	JJSDJPJT	N	Place of Settlement (PSET) Party	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: party_classification; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party_classification (party_ref, class_type, class_code, user_def, description, version_date, version_no, version_user) FROM stdin;
CMP4        	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP4        	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP4        	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
CMP4        	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
TRADING     	ACCL	TRDG	N	Accounting Class                        	2021-01-01	1	JMARSDEN    
TRADING     	POST	TRDG	N	Position Type                           	2021-01-01	1	JMARSDEN    
TRADING     	HDTT	FINI	N	Holding Tax Type                        	2021-01-01	1	JMARSDEN    
TRADING     	MKTT	SECO	N	Market Type (Primary / Grey / Secondary)	2021-01-01	1	JMARSDEN    
JASD00      	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
JASD00      	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP5        	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
CMP5        	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP5        	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
CMP5        	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
JASD98      	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
JASD98      	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
JASD60      	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
JASD60      	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
JASD40      	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
JASD40      	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP6        	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
CMP6        	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP6        	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP6        	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
CMP7        	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
CMP7        	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
CMP7        	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP7        	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP8        	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
CMP8        	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
CMP8        	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP8        	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP10       	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP10       	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP10       	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
CMP10       	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
SECP        	HOL 	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP1        	HOL 	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP9        	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
CMP9        	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
CMP9        	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP9        	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
CMP22       	HOL 	JP  	N	Holiday                                 	2021-01-01	1	JMARSDEN    
CMP22       	PPUR	VALU	Y	Price Purpose                           	2021-01-01	1	JMARSDEN    
CMP22       	CTRY	JP  	N	Country                                 	2021-01-01	1	JMARSDEN    
CMP22       	LOCN	TOK 	N	Location                                	2021-01-01	1	JMARSDEN    
\.


--
-- Data for Name: party_ext_ref; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party_ext_ref (party_ref, party_ext_ref_type, party_ext_ref, user_def, description, version_date, version_no, version_user) FROM stdin;
CMP4	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP4	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP5	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP5	BIC	BRSCJPJT	Y	BIC Code	2021-01-01	1	JMARSDEN
CMP5	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP4	BIC	BRSCJPJT	Y	BIC Coded	2020-12-31	2	Admin
CMP6	BIC	BRSCJPJT	Y	BIC Coded	2020-12-31	2	Admin
CMP6	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP6	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP7	BIC	BRSCJPJT	Y	BIC Coded	2020-12-31	2	Admin
CMP7	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP7	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP8	BIC	BRSCJPJT	Y	BIC Coded	2020-12-31	2	Admin
CMP8	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP8	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP10	BIC	BRSCJPJT	Y	BIC Coded	2020-12-31	2	Admin
CMP10	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP10	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
SECP	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP1	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP9	BIC	BRSCJPJT	Y	BIC Coded	2020-12-31	2	Admin
CMP9	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP9	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
CMP22	JASD	12345	Y	JASDEC Code	2021-01-01	1	JMARSDEN
CMP22	BIC	BRSCJPJT	Y	BIC Coded	2020-12-31	2	Admin
CMP22	BOJ	2345	Y	BOJ Code	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: party_flag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party_flag (party_ref, flag_type, flag_code, user_def, description, version_date, version_no, version_user) FROM stdin;
TRADING     	1102	EXMT	N	Tax Exempt                              	2021-01-01	1	JMARSDEN    
TRADING     	8068	2   	N	Prin Off Market (Trading A/C)           	2021-01-01	1	JMARSDEN    
TRADING     	8067	1   	N	Prin On Market (Trading A/C)            	2021-01-01	1	JMARSDEN    
CMP4        	1	DDDD	Y	TEST                                    	2002-12-10	1	ADMIN       
CMP10       	1	DDDD	Y	TEST                                    	2002-12-10	1	ADMIN       
SECP        	1102	TEST	N	TEST FLAG                               	2021-01-09	1	ADMIN       
SECP        	1111	1   	N	Prin On Market (Trading A/C)            	2021-01-01	1	JMARSDEN    
CMP1        	1102	TEST	N	TEST FLAG                               	2021-01-09	1	ADMIN       
CMP1        	1111	1   	N	Prin On Market (Trading A/C)            	2021-01-01	1	JMARSDEN    
CMP9        	1	DDDD	Y	TEST                                    	2002-12-10	1	ADMIN       
\.


--
-- Data for Name: party_instr; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party_instr (party_ref, instr_ref, instr_type, instr_ref_type, user_def, description, version_date, version_no, version_user) FROM stdin;
CMP4        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP5        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP6        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP7        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP8        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP10       	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
SECP        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP1        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP9        	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
CMP22       	COBI        	ISO 	JPY 	N	Base Ccy                                	2021-01-01	1	JMARSDEN    
\.


--
-- Data for Name: party_narrative; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party_narrative (party_ref, narr_type, narrative, user_def, description, version_date, version_no, version_user) FROM stdin;
TRADING	INAM	TRADING BOOK	Y	Internal Narrative	2021-01-01	1	JMARSDEN
TRADING	PJEX	トレーディング勘定	Y	Japanese Narrative	2021-01-01	1	JMARSDEN
JASD00	INAM	JASD00	Y	Internal Narrative	2021-01-01	1	JMARSDEN
JASD00	PJEX	ほふり保有口（自己）	Y	Japanese Narrative	2021-01-01	1	JMARSDEN
JASD98	INAM	JASD98 Pledge A/C	Y	Internal Narrative	2021-01-01	1	JMARSDEN
JASD98	PJEX	質権口	Y	Japanese Narrative	2021-01-01	1	JMARSDEN
JASD60	INAM	JASD60 Client A/C	Y	Internal Narrative	2021-01-01	1	JMARSDEN
JASD60	PJEX	保振預かり口	Y	Japanese Narrative	2021-01-01	1	JMARSDEN
JASD40	INAM	JASD40 Dedicated Collateral A/C	Y	Internal Narrative	2021-01-01	1	JMARSDEN
JASD40	PJEX	担保口（専用口）	Y	Japanese Narrative	2021-01-01	1	JMARSDEN
SECP	PJEX	TESTING	Y	Internal Narrative	2021-01-01	1	JMARSDEN
CMP1	PJEX	TESTING	Y	Internal Narrative	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: party_ssi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.party_ssi (party_ref, depot_alias, depot_descr, depot_type, comms_service, dacc_ref, account_no, account_name, depo_ref, active_ind, user_def, description, version_date, version_no, version_user) FROM stdin;
CMP4	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP4	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP4	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP4	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP4	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP5	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP5	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP5	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP5	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP5	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP6	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP6	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP6	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP6	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP6	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP7	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP7	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP7	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP7	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP7	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP8	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP8	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP8	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP8	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP8	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP10	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP10	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP10	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP10	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP10	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
SECP	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP1	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP9	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP9	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP9	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP9	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP9	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP22	JASD00	JASD00	Depot	JASDEC	JASD00	1234500	JASDEC OWN	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP22	JASD98	JASD98	Depot	JASDEC	JASD00	1234598	JASDEC PLEDGE	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP22	JASD60	JASD60	Depot	JASDEC	JASD60	1234560	JASDEC SAFEKEEPING	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP22	JASD40	JASD40	Depot	JASDEC	JASD40	1234540	JASDEC ASSGN COLL	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
CMP22	JASD80	JASD80	Depot	JASDEC	JASD80	1234580	JASDEC NR A/C	BRSCJPJT	A	Y	JASDEC TEMPLATE	2021-01-01	1	JMARSDEN
\.


--
-- Data for Name: trades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trades (host_reference, tref_ext_ref, opertion, instrument_ref_type, quantity, counterparty, trade_price, trade_time, value_date, company, book, trade_currency) FROM stdin;
\.


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: environment environment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.environment
    ADD CONSTRAINT environment_pkey PRIMARY KEY (environment);


--
-- Name: instr_accrual instr_accrual_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instr_accrual
    ADD CONSTRAINT instr_accrual_pkey PRIMARY KEY (instr_ref, seq_no);


--
-- Name: instr_classification instr_classification_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instr_classification
    ADD CONSTRAINT instr_classification_pkey PRIMARY KEY (instr_ref, class_type);


--
-- Name: instr_date instr_date_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instr_date
    ADD CONSTRAINT instr_date_pkey PRIMARY KEY (instr_ref, date_type);


--
-- Name: instr_ext_ref instr_ext_ref_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instr_ext_ref
    ADD CONSTRAINT instr_ext_ref_pkey PRIMARY KEY (instr_ref, instr_ext_ref_type);


--
-- Name: instr_flag instr_flag_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instr_flag
    ADD CONSTRAINT instr_flag_pkey PRIMARY KEY (instr_ref, flag_type, flag_code);


--
-- Name: instr_narrative instr_narrative_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instr_narrative
    ADD CONSTRAINT instr_narrative_pkey PRIMARY KEY (instr_ref, narr_type);


--
-- Name: instr instr_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instr
    ADD CONSTRAINT instr_pkey PRIMARY KEY (instr_ref);


--
-- Name: party_assoc party_assoc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party_assoc
    ADD CONSTRAINT party_assoc_pkey PRIMARY KEY (party_ref, assoc_type);


--
-- Name: party_classification party_classification_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party_classification
    ADD CONSTRAINT party_classification_pkey PRIMARY KEY (party_ref, class_type);


--
-- Name: party_ext_ref party_ext_ref_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party_ext_ref
    ADD CONSTRAINT party_ext_ref_pkey PRIMARY KEY (party_ref, party_ext_ref_type);


--
-- Name: party_flag party_flag_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party_flag
    ADD CONSTRAINT party_flag_pkey PRIMARY KEY (party_ref, flag_type);


--
-- Name: party_instr party_instr_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party_instr
    ADD CONSTRAINT party_instr_pkey PRIMARY KEY (party_ref, instr_ref);


--
-- Name: party_narrative party_narrative_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party_narrative
    ADD CONSTRAINT party_narrative_pkey PRIMARY KEY (party_ref, narr_type);


--
-- Name: party party_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party
    ADD CONSTRAINT party_pkey PRIMARY KEY (party_ref);


--
-- Name: party_ssi party_ssi_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.party_ssi
    ADD CONSTRAINT party_ssi_pkey PRIMARY KEY (party_ref, depot_alias);


--
-- Name: trades trades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trades
    ADD CONSTRAINT trades_pkey PRIMARY KEY (host_reference, tref_ext_ref);


--
-- PostgreSQL database dump complete
--

--
-- Database "prisma" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 12.5 (Debian 12.5-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: prisma; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE prisma WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE prisma OWNER TO postgres;

\connect prisma

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Post" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    title text NOT NULL,
    content text,
    published boolean DEFAULT false NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public."Post" OWNER TO postgres;

--
-- Name: Post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Post_id_seq" OWNER TO postgres;

--
-- Name: Post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;


--
-- Name: Profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Profile" (
    id integer NOT NULL,
    bio text,
    "userId" integer NOT NULL
);


ALTER TABLE public."Profile" OWNER TO postgres;

--
-- Name: Profile_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Profile_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Profile_id_seq" OWNER TO postgres;

--
-- Name: Profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Profile_id_seq" OWNED BY public."Profile".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    name text
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: Post id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);


--
-- Name: Profile id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Profile" ALTER COLUMN id SET DEFAULT nextval('public."Profile_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Post" (id, "createdAt", "updatedAt", title, content, published, "authorId") FROM stdin;
1	2020-12-24 05:20:48.24	2020-12-24 14:20:06	TESTING	Good things in life come to those who ...	t	1
\.


--
-- Data for Name: Profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Profile" (id, bio, "userId") FROM stdin;
1	Good stuff	1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, name) FROM stdin;
1	murray@hotmail.com	Murray
\.


--
-- Name: Post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Post_id_seq"', 1, true);


--
-- Name: Profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Profile_id_seq"', 1, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: Profile Profile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Profile"
    ADD CONSTRAINT "Profile_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: Profile.userId_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Profile.userId_unique" ON public."Profile" USING btree ("userId");


--
-- Name: User.email_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User.email_unique" ON public."User" USING btree (email);


--
-- Name: Post Post_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Profile Profile_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Profile"
    ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

--
-- Database "public" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 12.5 (Debian 12.5-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE public WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE public OWNER TO postgres;

\connect public

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

