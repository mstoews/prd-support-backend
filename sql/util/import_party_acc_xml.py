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
# NAME        : import_party_acc_xml.py
#
#
# DESCRIPTION : This module imports Party Account XML strings
#               into the database by making SQL statements
#
#
# AMENDMENT HISTORY:
#
#
#  Version no.    Description                        Author          Date
#
#  jpti-739       Created by                         James Marsden   31-Jul-2021
#                                                    (RJM)
#

import extract_xml_tag_value
import process_xml_msg
import genr_sql_str
import sys

def run_get_party_acc (myXmlFileInput, myXmlFilePath, mySqlPath, myPartyQual, myCommQual, myPartyAccQual):
    print ("Running to load party account")
    myFileName = myXmlFilePath + myXmlFileInput

    try:
        myFile = open (myFileName, "r", True, "utf8")
        myPartyStr = myFile.readline ()
    except FileNotFoundError:
        print ("Unable to open the file " + myFileName)
        return

    myTmpSql = ""

    while (myPartyStr != ""):
        # Read the XML msg and construct back into objects
        myExtractXml = extract_xml_tag_value.Extract_Tag (myPartyStr, "Y", myPartyQual, myCommQual, myPartyAccQual)
        mySubMsg = myExtractXml.get_sub_msg_parent ("PartyAccount")

        # Mapping the XML objects back into lists
        myProcessXmlMsg = process_xml_msg.process_xml_msg (mySubMsg)
        myProcessXmlMsg.process_xml_msg_main ()

        # Generate the SQL strings
        myGenrSqlStr = genr_sql_str.genr_sql_str (myProcessXmlMsg.get_party_ref (), 
                                                  "",
                                                  "",
                                                  "",
                                                  "",
                                                  "",
                                                  "",
                                                  "",
                                                  myProcessXmlMsg.get_depot_alias (),
                                                  myProcessXmlMsg.get_party_acc ())
        myGenrSqlStr.genr_sql_stmt_acc ()
        myTmpSql = myTmpSql + myGenrSqlStr.get_sql_str ()

        # Get the next line from the file
        myPartyStr = myFile.readline ()

    print ("Finished processing input file")

    # Get the party ref and if it has spaces, replace with _ so that the file name
    # doesn't end up with spaces
    myTmpPartyRef = myProcessXmlMsg.get_party_ref ()
    myTmpPartyRef = myTmpPartyRef.replace (" ", "_")

    # Generate the SQL file
    myFileName = mySqlPath + "/insert_party_acc_" + myTmpPartyRef + ".psql"
    mySqlFile = open (myFileName, "w", True, "utf8")
    mySqlFile.write (myTmpSql)
    mySqlFile.close ()

    return


if __name__ == "__main__":
    if (len (sys.argv) != 7):
        print ("Insufficient parameters")
        print (sys.argv[0] + " <input_XML_file> <input_XML_path> <output_SQL_path> <myPartyQual> <myCommQual> <myPartyAccQual>")
        exit (1)

    myXmlFileInput = sys.argv[1]
    myXmlPath      = sys.argv[2]
    mySqlPath      = sys.argv[3]
    myPartyQual    = sys.argv[4]
    myCommQual     = sys.argv[5]
    myPartyAccQual = sys.argv[6]

    run_get_party_acc (myXmlFileInput, myXmlPath, mySqlPath, myPartyQual, myCommQual, myPartyAccQual)

    exit (0)
