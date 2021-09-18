-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'TEAMOPERATOR', 'TEAMSUPERVISOR');

-- CreateTable
CREATE TABLE "User" (
    "userid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "role" "Role" NOT NULL,

    PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "class_assoc" (
    "party_ref" TEXT NOT NULL,
    "class_assoc_code" TEXT NOT NULL,
    "code_type" TEXT NOT NULL,
    "class_1" INTEGER NOT NULL,
    "code_1" TEXT NOT NULL,
    "class_2" INTEGER NOT NULL,
    "code_2" TEXT[],
    "applied" BOOLEAN NOT NULL,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER NOT NULL,
    "version_user" TEXT NOT NULL,

    PRIMARY KEY ("party_ref","class_assoc_code","code_type","class_1","code_1","class_2")
);

-- CreateTable
CREATE TABLE "party_data_pushed" (
    "party_ref" TEXT NOT NULL,
    "environment" TEXT NOT NULL,
    "party_template_data" TEXT,
    "party_class_assoc_data" TEXT,
    "party_netting_data" TEXT,
    "version_date" TIMESTAMP(3),
    "version_user" TEXT NOT NULL,

    PRIMARY KEY ("party_ref","environment")
);

-- CreateTable
CREATE TABLE "environment" (
    "environment" TEXT NOT NULL,
    "description" TEXT,
    "sst_nestjsserver_url" TEXT,
    "sst_pythonserver_url" TEXT,
    "sst_springserver_url" TEXT,
    "active" TEXT,

    PRIMARY KEY ("environment")
);

-- CreateTable
CREATE TABLE "gloss_codes" (
    "class_value" INTEGER NOT NULL,
    "code_value" TEXT NOT NULL,
    "code_short_desc" TEXT,
    "code_long_desc" TEXT,
    "active_ind" TEXT,

    PRIMARY KEY ("class_value","code_value")
);

-- CreateTable
CREATE TABLE "instr" (
    "instr_ref" TEXT NOT NULL,
    "instr_type" TEXT,
    "template_ref" TEXT,
    "instr_short_name" TEXT,
    "instr_long_name" TEXT,
    "active_ind" TEXT,
    "issu_date" TIMESTAMP(3),
    "issu_price" DOUBLE PRECISION,
    "matu_date" TIMESTAMP(3),
    "matu_price" DOUBLE PRECISION,
    "denom_ccy" TEXT,
    "price_dec" DOUBLE PRECISION,
    "price_div" DOUBLE PRECISION,
    "price_mul" DOUBLE PRECISION,
    "price_type" TEXT,
    "tick_value" DOUBLE PRECISION,
    "book_ref" TEXT,
    "market_ref" TEXT,
    "lot_size" INTEGER,
    "qty_dec_places" INTEGER,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("instr_ref")
);

-- CreateTable
CREATE TABLE "instr_accrual" (
    "instr_ref" TEXT NOT NULL,
    "seq_no" INTEGER NOT NULL,
    "accr_basis" TEXT,
    "amort_flag" TEXT,
    "capi_flag" TEXT,
    "paym_ccy" TEXT,
    "start_accr_date" TIMESTAMP(3),
    "first_paym_date" TIMESTAMP(3),
    "last_paym_date" TIMESTAMP(3),
    "frn_flag" TEXT,
    "neg_flag" TEXT,
    "freq_rule" TEXT,
    "freq_unit" INTEGER,
    "cal_code" TEXT,
    "date_rule" TEXT,
    "eom_flag" TEXT,
    "cpon_rate" DOUBLE PRECISION,
    "rnd_rule" TEXT,
    "rdat_offset" INTEGER,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("instr_ref","seq_no")
);

-- CreateTable
CREATE TABLE "instr_classification" (
    "instr_ref" TEXT NOT NULL,
    "class_type" TEXT NOT NULL,
    "class_code" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("instr_ref","class_type")
);

-- CreateTable
CREATE TABLE "instr_date" (
    "instr_ref" TEXT NOT NULL,
    "date_type" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("instr_ref","date_type")
);

-- CreateTable
CREATE TABLE "instr_ext_ref" (
    "instr_ref" TEXT NOT NULL,
    "instr_ext_ref_type" TEXT NOT NULL,
    "instr_ext_ref" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("instr_ref","instr_ext_ref_type")
);

-- CreateTable
CREATE TABLE "instr_flag" (
    "instr_ref" TEXT NOT NULL,
    "flag_type" INTEGER NOT NULL,
    "flag_code" TEXT NOT NULL,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("instr_ref","flag_type","flag_code")
);

-- CreateTable
CREATE TABLE "instr_narrative" (
    "instr_ref" TEXT NOT NULL,
    "narr_type" TEXT NOT NULL,
    "narrative" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("instr_ref","narr_type")
);

-- CreateTable
CREATE TABLE "kb_task" (
    "task_id" TEXT NOT NULL,
    "party_ref" TEXT,
    "title" TEXT,
    "status" TEXT,
    "summary" TEXT,
    "type" TEXT,
    "priority" TEXT,
    "tags" TEXT,
    "estimate" INTEGER,
    "assignee" TEXT,
    "rankid" INTEGER,
    "color" TEXT,
    "classname" TEXT,

    PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "kb_subtask" (
    "task_id" TEXT NOT NULL,
    "subid" TEXT NOT NULL,
    "desc" TEXT,
    "status" TEXT,
    "summary" TEXT,
    "type" TEXT,
    "estimate" INTEGER,

    PRIMARY KEY ("task_id","subid")
);

-- CreateTable
CREATE TABLE "kb_priority" (
    "priority" TEXT NOT NULL,
    "description" TEXT,
    "updatedte" TIMESTAMP(3),
    "updateusr" TEXT,

    PRIMARY KEY ("priority")
);

-- CreateTable
CREATE TABLE "kb_status" (
    "status" TEXT NOT NULL,
    "description" TEXT,
    "updatedte" TIMESTAMP(3),
    "updateusr" TEXT,

    PRIMARY KEY ("status")
);

-- CreateTable
CREATE TABLE "kb_type" (
    "type" TEXT NOT NULL,
    "description" TEXT,
    "updatedte" TIMESTAMP(3),
    "updateusr" TEXT,

    PRIMARY KEY ("type")
);

-- CreateTable
CREATE TABLE "party" (
    "party_ref" TEXT NOT NULL,
    "party_type" TEXT,
    "party_short_name" TEXT,
    "party_long_name" TEXT,
    "party_extra_long_name" TEXT,
    "active_ind" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref")
);

-- CreateTable
CREATE TABLE "party_addr" (
    "party_ref" TEXT NOT NULL,
    "addr_type" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "contact_title" TEXT NOT NULL,
    "addr_line1" TEXT NOT NULL,
    "addr_line2" TEXT NOT NULL,
    "addr_line3" TEXT NOT NULL,
    "addr_line4" TEXT NOT NULL,
    "addr_line5" TEXT NOT NULL,
    "addr_line6" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,
    "int_dial_code" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "fax_no" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER NOT NULL,
    "version_user" TEXT NOT NULL,

    PRIMARY KEY ("party_ref","addr_type")
);

-- CreateTable
CREATE TABLE "party_assoc" (
    "party_ref" TEXT NOT NULL,
    "assoc_type" TEXT NOT NULL,
    "assoc_party_ref" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","assoc_type")
);

-- CreateTable
CREATE TABLE "party_audit" (
    "party_ref" TEXT NOT NULL,
    "party_data" TEXT,
    "party_ext_ref_data" TEXT,
    "party_classification_data" TEXT,
    "party_flag_data" TEXT,
    "party_narrative_data" TEXT,
    "party_assoc_data" TEXT,
    "party_instr_data" TEXT,
    "party_ssi_data" TEXT,
    "party_date_data" TEXT,
    "party_address_data" TEXT,
    "party_template_data" TEXT,
    "party_class_assoc_data" TEXT,
    "party_netting_data" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER NOT NULL,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","version_no")
);

-- CreateTable
CREATE TABLE "party_classification" (
    "party_ref" TEXT NOT NULL,
    "class_type" TEXT NOT NULL,
    "class_code" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","class_type")
);

-- CreateTable
CREATE TABLE "party_date" (
    "party_ref" TEXT NOT NULL,
    "date_type" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "version_date" TIMESTAMP(3) NOT NULL,
    "version_no" INTEGER NOT NULL,
    "version_user" TEXT NOT NULL,

    PRIMARY KEY ("party_ref","date_type")
);

-- CreateTable
CREATE TABLE "party_ext_ref" (
    "party_ref" TEXT NOT NULL,
    "party_ext_ref_type" TEXT NOT NULL,
    "party_ext_ref" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","party_ext_ref_type")
);

-- CreateTable
CREATE TABLE "party_flag" (
    "party_ref" TEXT NOT NULL,
    "flag_type" INTEGER NOT NULL,
    "flag_code" TEXT NOT NULL,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","flag_type","flag_code")
);

-- CreateTable
CREATE TABLE "party_instr" (
    "party_ref" TEXT NOT NULL,
    "instr_type" TEXT NOT NULL,
    "instr_ref_type" TEXT,
    "instr_ref" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","instr_type")
);

-- CreateTable
CREATE TABLE "party_narrative" (
    "party_ref" TEXT NOT NULL,
    "narr_type" TEXT NOT NULL,
    "narrative" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "version_no" INTEGER DEFAULT 1,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","narr_type")
);

-- CreateTable
CREATE TABLE "party_ssi" (
    "party_ref" TEXT NOT NULL,
    "depot_alias" TEXT NOT NULL,
    "depot_descr" TEXT,
    "depot_type" TEXT,
    "ccy" TEXT,
    "comms_service" TEXT,
    "dacc_ref" TEXT,
    "account_no" TEXT,
    "account_name" TEXT,
    "depo_ref" TEXT,
    "active_ind" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","depot_alias")
);

-- CreateTable
CREATE TABLE "party_swift_router" (
    "party_ref" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "logical_term_id" TEXT[],
    "queue_mgr" TEXT NOT NULL,
    "incoming_queue" TEXT NOT NULL,
    "outgoing_queue" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port_number" INTEGER NOT NULL,
    "version_date" TIMESTAMP(3) NOT NULL,
    "version_no" INTEGER NOT NULL,
    "version_user" TEXT NOT NULL,
    "branch_code" TEXT,

    PRIMARY KEY ("party_ref")
);

-- CreateTable
CREATE TABLE "party_template" (
    "party_ref" TEXT NOT NULL,
    "template_party_ref" TEXT NOT NULL,
    "party_short_name" TEXT NOT NULL,
    "party_long_name" TEXT NOT NULL,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref")
);

-- CreateTable
CREATE TABLE "gloss_scheduler" (
    "msg_type" INTEGER NOT NULL,
    "event_ref" TEXT NOT NULL,
    "database_type" TEXT,
    "database_code" TEXT NOT NULL,
    "sql_db_code" TEXT,
    "bus_day" TEXT,
    "holiday_id" TEXT,
    "frequency_unit" TEXT,
    "frequency_interval" INTEGER,
    "frequency_start_time" TIMESTAMP(3),
    "frequency_end_time" TIMESTAMP(3),
    "due_date_time" TIMESTAMP(3) NOT NULL,
    "start_by_unit" TEXT,
    "start_by_interval" INTEGER,
    "end_by_interval" INTEGER,
    "use_current_date" TEXT,
    "active_ind_p2k" TEXT,
    "start_by_time" TIMESTAMP(3),
    "end_by_time" TIMESTAMP(3),
    "batch_size" INTEGER,
    "supercede" TEXT,
    "dst_region_code" TEXT,
    "version_no" INTEGER,
    "version_date" TIMESTAMP(3),
    "version_user" TEXT,

    PRIMARY KEY ("msg_type","event_ref","due_date_time","database_code")
);

-- CreateTable
CREATE TABLE "gloss_netting" (
    "party_ref" TEXT NOT NULL,
    "net_driver" TEXT NOT NULL,
    "settle_code" TEXT NOT NULL,
    "transaction_type" TEXT NOT NULL,
    "trade_group" INTEGER,
    "late_rule" TEXT,
    "net_schedule_code" TEXT,
    "date_type" TEXT,
    "buy_and_sell_flag" TEXT,
    "net_party_ref" TEXT,
    "net_book" TEXT,
    "override_net_book" TEXT,
    "secondary_party" TEXT,
    "settle_terms" TEXT,
    "operation_type" TEXT,
    "net_primary" TEXT,
    "primary_comp_service" TEXT,
    "primary_secp_service" TEXT,
    "net_secondary" TEXT,
    "secondary_comp_service" TEXT,
    "secondary_secp_service" TEXT,
    "primary_instr" TEXT,
    "primary_comp_alias" TEXT,
    "primary_depot_type" TEXT,
    "primary_party_ref" TEXT,
    "primary_secp_alias" TEXT,
    "settle_instr" TEXT,
    "secondary_comp_alias" TEXT,
    "secondary_depot_type" TEXT,
    "secondary_party_ref" TEXT,
    "secondary_secp_alias" TEXT,
    "market_party" TEXT,
    "start_date_type" TEXT,
    "start_offset_ind" TEXT,
    "start_offset_code" TEXT,
    "end_date_type" TEXT,
    "end_offset_ind" TEXT,
    "end_offset_code" TEXT,
    "net_cash_when_zero_stock" TEXT,
    "split_buy_sell" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","net_driver","settle_code","transaction_type")
);
