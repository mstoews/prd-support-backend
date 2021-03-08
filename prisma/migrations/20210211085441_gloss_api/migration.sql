-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "role" "Role" NOT NULL,

    PRIMARY KEY ("id")
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
    "flag_code" TEXT,
    "user_def" TEXT,
    "description" TEXT,
    "version_date" TIMESTAMP(3),
    "version_no" INTEGER,
    "version_user" TEXT,

    PRIMARY KEY ("party_ref","flag_type")
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
CREATE TABLE "party_ssi" (
    "party_ref" TEXT NOT NULL,
    "depot_alias" TEXT NOT NULL,
    "depot_descr" TEXT,
    "depot_type" TEXT,
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
CREATE TABLE "instr" (
    "instr_ref" TEXT NOT NULL,
    "instr_type" TEXT,
    "template_ref" TEXT,
    "instr_short_name" TEXT,
    "instr_long_name" TEXT,
    "active_ind" TEXT,
    "issu_date" TIMESTAMP(3),
    "issu_price" DECIMAL(65,30),
    "matu_date" TIMESTAMP(3),
    "matu_price" DECIMAL(65,30),
    "denom_ccy" TEXT,
    "price_dec" DECIMAL(65,30),
    "price_div" DECIMAL(65,30),
    "price_mul" DECIMAL(65,30),
    "price_type" TEXT,
    "tick_value" DECIMAL(65,30),
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
    "cpon_rate" DECIMAL(65,30),
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
CREATE TABLE "environment" (
    "environment" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "usr" TEXT,
    "active" TEXT,

    PRIMARY KEY ("environment")
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
CREATE TABLE "kanbantask" (
    "id" TEXT NOT NULL,
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

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kb_priority" (
    "priority" TEXT NOT NULL,
    "updatedte" TIMESTAMP(3),
    "updateusr" TEXT,

    PRIMARY KEY ("priority")
);

-- CreateTable
CREATE TABLE "kb_status" (
    "status" TEXT NOT NULL,
    "updatedte" TIMESTAMP(3),
    "updateusr" TEXT,

    PRIMARY KEY ("status")
);

-- CreateTable
CREATE TABLE "kb_type" (
    "type" TEXT NOT NULL,
    "updatedte" TIMESTAMP(3),
    "updateusr" TEXT,

    PRIMARY KEY ("type")
);
