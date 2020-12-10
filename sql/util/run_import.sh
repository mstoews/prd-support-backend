#! /bin/sh

XML_PATH=/c/temp/pcfeedxml/
XML_FILE="JP BROKER.xml"
SQL_PATH=/c/temp/sql

echo $XML_PATH
echo $XML_FILE
echo $SQL_PATH

python import_party_xml.py "$XML_FILE" $XML_PATH $SQL_PATH
