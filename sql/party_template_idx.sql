DROP INDEX party_primary_key
\g

CREATE UNIQUE INDEX party_primary_key ON party USING btree
(
     party_ref
)
\g

DROP INDEX party_classification_primary_key
\g

CREATE UNIQUE INDEX party_classification_primary_key ON party_classification USING btree
(
     party_ref,
     class_type
)
\g

DROP INDEX party_ext_ref_primary_key
\g

CREATE UNIQUE INDEX party_ext_ref_primary_key ON party_ext_ref USING btree
(
     party_ref,
     party_ext_ref_type
)
\g

DROP INDEX party_flag_primary_key
\g

CREATE UNIQUE INDEX party_flag_primary_key ON party_flag USING btree
(
     party_ref,
     flag_type,
     flag_code
)
\g

DROP INDEX party_narrative_primary_key
\g

CREATE UNIQUE INDEX party_narrative_primary_key ON party_narrative USING btree
(
     party_ref,
     narr_type
)
\g

DROP INDEX party_instr_primary_key
\g

CREATE UNIQUE INDEX party_instr_primary_key ON party_instr USING btree
(
     party_ref,
     instr_type
)
\g

DROP INDEX party_assoc_primary_key
\g

CREATE UNIQUE INDEX party_assoc_primary_key ON party_assoc USING btree
(
     party_ref,
     assoc_type
)
\g

DROP INDEX party_ssi_primary_key
\g

CREATE UNIQUE INDEX party_ssi_primary_key ON party_ssi USING btree
(
     party_ref,
     depot_alias
)
\g
