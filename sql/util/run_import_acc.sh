#! /bin/sh

XML_PATH=/c/temp/pcfeedxml/
XML_FILE="JPM_SEC_ACC.xml"
SQL_PATH=/c/temp/sql
PARTY_QUAL="p"
COMM_QUAL="c"
PACC_QUAL="pa"

echo $XML_PATH
echo $XML_FILE
echo $SQL_PATH

python import_party_acc_xml.py "$XML_FILE" $XML_PATH $SQL_PATH $PARTY_QUAL $COMM_QUAL $PACC_QUAL
