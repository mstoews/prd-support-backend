#! /home/gloss/util/python3
# /*  +++begin copyright+++ *******************************  */
# /*                                                         */
# /*  BROADRIDGE CONFIDENTIAL INFORMATION: FIRST CLASS       */
# /*  COPYRIGHT (c) Broadridge (Japan) Limited               */
# /*                                                         */
# /*  This  program  contains confidential and proprietary   */
# /*  information  of  Broadridge (Japan) Ltd., and any      */
# /*  reproduction,  disclosure, or use in whole or in part  */
# /*  is   expressly   prohibited,   except   as   may   be  */
# /*  specifically authorized by prior written agreement or  */
# /*  permission of Broadridge, Purveyors of Fine Software.  */
# /*                                                         */
# /*  +++end copyright+++ *********************************  */
#
#
# NAME        : import_party_xml.py
#
#
# DESCRIPTION : This is component to import XML strings from files
#               into the database by making SQL statements
#
#
# AMENDMENT HISTORY:
#
#
#  Version no.    Description                        Author          Date
#
#  brtk04050      Created by                         James Marsden   24-Nov-2020
#                                                    (RJM)
#

import extract_xml_tag_value
import process_xml_msg
import genr_sql_str
import sys

def run_get_party (myXmlFileInput, myXmlFilePath, mySqlPath):
    print ("Running to load party")
    myFileName = myXmlFilePath + myXmlFileInput

    try:
        myFile = open (myFileName, "r", True, "utf8")
        myPartyStr = myFile.read ()
    except FileNotFoundError:
        print ("Unable to open the file " + myFileName)
        return

    #myPartyStr = myPartyStr.replace ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "")
    #myPartyStr = myPartyStr.replace ("<p:",   "<")
    #myPartyStr = myPartyStr.replace ("</p:",   "</")
    #myPartyStr = myPartyStr.replace ("xmlns:p=",  "xmlns=")
    #myPartyStr = myPartyStr.replace ("<p1:",  "<")
    #myPartyStr = myPartyStr.replace ("</p1:",  "</")
    #myPartyStr = myPartyStr.replace ("xmlns:p1=", "xmlns=")

    # Read the XML msg and construct back into objects
    myExtractXml = extract_xml_tag_value.Extract_Tag (myPartyStr, "Y", "p", "p1")
    mySubMsg = myExtractXml.get_sub_msg_parent ("Party")

    # Mapping the XML objects back into lists
    myProcessXmlMsg = process_xml_msg.process_xml_msg (mySubMsg)
    myProcessXmlMsg.process_xml_msg_main ()

    # Generate the SQL strings
    myGenrSqlStr = genr_sql_str.genr_sql_str (myProcessXmlMsg.get_party_ref (),
                                              myProcessXmlMsg.get_party_main (),
                                              myProcessXmlMsg.get_party_class (),
                                              myProcessXmlMsg.get_party_refs (),
                                              myProcessXmlMsg.get_party_flag (),
                                              myProcessXmlMsg.get_party_narr (),
                                              myProcessXmlMsg.get_party_assoc (),
                                              myProcessXmlMsg.get_party_instr ())
    myGenrSqlStr.genr_sql_stmt ()
    myTmpSql = myGenrSqlStr.get_sql_str ()

    # Generate the SQL file
    myFileName = mySqlPath + "/insert_party_" + myProcessXmlMsg.get_party_ref () + ".psql"
    mySqlFile = open (myFileName, "w", True, "utf8")
    mySqlFile.write (myTmpSql)
    mySqlFile.close ()

    return


if __name__ == "__main__":
    if (len (sys.argv) != 4):
        print ("Insufficient parameters")
        print (sys.argv[0] + " <input_XML_file> <input_XML_path> <output_SQL_path>")
        exit (1)

    myXmlFileInput = sys.argv[1]
    myXmlPath      = sys.argv[2]
    mySqlPath      = sys.argv[3]

    run_get_party (myXmlFileInput, myXmlPath, mySqlPath)

    exit (0)
