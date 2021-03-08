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
# NAME        : genr_sql_str.py
#
#
# DESCRIPTION : This module takes lists of Dict objects and converts
#               to SQL statements for the party model
#
#
# AMENDMENT HISTORY:
#
#
#  Version no.    Description                        Author          Date
#
#  brtk04050      Created by                         James Marsden   28-Nov-2020
#                                                    (RJM)
#
#  brtk04059      Added the lookup logic for types   James Marsden   09-Jan-2021
#                                                    (RJM)
#

import os
import json

class genr_sql_str:

    def __init__ (self, myCurPartyRef, myPartyMain, myPartyClass, myPartyRef,
                        myPartyFlag,   myPartyNarr, myPartyAssoc, myPartyInstr):

        # We use these variables to convert to SQL strings
        self.myCurrPartyRef  = myCurPartyRef
        self.myPartyMain     = myPartyMain
        self.myPartyClass    = myPartyClass
        self.myPartyRef      = myPartyRef
        self.myPartyFlag     = myPartyFlag
        self.myPartyNarr     = myPartyNarr
        self.myPartyAssoc    = myPartyAssoc
        self.myPartyInstr    = myPartyInstr

        # brtk04059 - Storage for the descriptions of the items
        self.myClassLookJson = self.load_lookup_file ("party_classification.json")
        self.myRefLookJson   = self.load_lookup_file ("party_ref.json")
        self.myFlagLookJson  = self.load_lookup_file ("party_flag.json")
        self.myAssocLookJson = self.load_lookup_file ("party_assoc.json")
        self.myInstrLookJson = self.load_lookup_file ("party_instr.json")
        self.myNarrLookJson  = self.load_lookup_file ("party_narr.json")

        # The final SQL result
        self.mySqlStr        = ""

        return

    def genr_sql_stmt (self):
        self.mySqlStr = self.mySqlStr + self.genr_sql_main ()
        self.mySqlStr = self.mySqlStr + self.genr_sql_class ()
        self.mySqlStr = self.mySqlStr + self.genr_sql_refs ()
        self.mySqlStr = self.mySqlStr + self.genr_sql_flag ()
        self.mySqlStr = self.mySqlStr + self.genr_sql_assoc ()
        self.mySqlStr = self.mySqlStr + self.genr_sql_instr ()

        return

    def genr_sql_main (self):
        tmpStr = ""

        tmpStr = tmpStr + "DELETE FROM party WHERE party_ref = '" + self.myCurrPartyRef + "'"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"
        tmpStr = tmpStr + "INSERT INTO party\n"
        tmpStr = tmpStr + "SELECT '" + self.myPartyMain[0]["party_ref"] + "',\n"
        tmpStr = tmpStr + "       '" + self.myPartyMain[0]["party_type"] + "',\n"
        tmpStr = tmpStr + "       '" + self.myPartyMain[0]["party_short_name"] + "',\n"
        tmpStr = tmpStr + "       '" + self.myPartyMain[0]["party_long_name"] + "',\n"
        tmpStr = tmpStr + "       '" + self.myPartyMain[0]["party_extra_long_name"] + "',\n"
        tmpStr = tmpStr + "       '" + self.myPartyMain[0]["active_ind"] + "',\n"
        tmpStr = tmpStr + "       current_timestamp,\n"
        tmpStr = tmpStr + "       1,\n"
        tmpStr = tmpStr + "       'SQL_UTIL'\n"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"

        return tmpStr

    def genr_sql_class (self):
        myLoopTot = len (self.myPartyClass)
        myLoopCnt = 0
        tmpStr = ""

        tmpStr = tmpStr + "DELETE FROM party_classification WHERE party_ref = '" + self.myCurrPartyRef + "'"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"

        while (myLoopCnt < myLoopTot):
            tmpStr = tmpStr + "INSERT INTO party_classification\n"
            tmpStr = tmpStr + "SELECT '" + self.myPartyClass[myLoopCnt]["party_ref"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyClass[myLoopCnt]["class_type"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyClass[myLoopCnt]["class_code"] + "',\n"

            # brtk04059 - We get + set the description from the config file here
            tmpDescr     = self.lookup_for_type (self.myPartyClass[myLoopCnt]["class_type"], self.myClassLookJson)
            tmpStr = tmpStr + "       '" + tmpDescr["user_def"] + "',\n"
            tmpStr = tmpStr + "       '" + tmpDescr["descr"] + "',\n"

            tmpStr = tmpStr + "       current_timestamp,\n"
            tmpStr = tmpStr + "       1,\n"
            tmpStr = tmpStr + "       'SQL_UTIL'\n"
            tmpStr = tmpStr + ";\n"
            tmpStr = tmpStr + "\n"

            myLoopCnt = myLoopCnt + 1

        return tmpStr

    def genr_sql_refs (self):
        myLoopTot = len (self.myPartyRef)
        myLoopCnt = 0
        tmpStr = ""

        tmpStr = tmpStr + "DELETE FROM party_ext_ref WHERE party_ref = '" + self.myCurrPartyRef + "'"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"

        while (myLoopCnt < myLoopTot):
            tmpStr = tmpStr + "INSERT INTO party_ext_ref\n"
            tmpStr = tmpStr + "SELECT '" + self.myPartyRef[myLoopCnt]["party_ref"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyRef[myLoopCnt]["party_ext_ref_type"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyRef[myLoopCnt]["party_ext_ref"] + "',\n"

            # brtk04059 - We get + set the description from the config file here
            tmpDescr     = self.lookup_for_type (self.myPartyRef[myLoopCnt]["party_ext_ref_type"], self.myRefLookJson)
            tmpStr = tmpStr + "       '" + tmpDescr["user_def"] + "',\n"
            tmpStr = tmpStr + "       '" + tmpDescr["descr"] + "',\n"

            tmpStr = tmpStr + "       current_timestamp,\n"
            tmpStr = tmpStr + "       1,\n"
            tmpStr = tmpStr + "       'SQL_UTIL'\n"
            tmpStr = tmpStr + ";\n"
            tmpStr = tmpStr + "\n"

            myLoopCnt = myLoopCnt + 1

        return tmpStr

    def genr_sql_flag (self):
        myLoopTot = len (self.myPartyFlag)
        myLoopCnt = 0
        tmpStr = ""

        tmpStr = tmpStr + "DELETE FROM party_flag WHERE party_ref = '" + self.myCurrPartyRef + "'"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"

        while (myLoopCnt < myLoopTot):
            tmpStr = tmpStr + "INSERT INTO party_flag\n"
            tmpStr = tmpStr + "SELECT '" + self.myPartyFlag[myLoopCnt]["party_ref"] + "',\n"
            tmpStr = tmpStr + "       " + self.myPartyFlag[myLoopCnt]["flag_type"] + ",\n"
            tmpStr = tmpStr + "       '" + self.myPartyFlag[myLoopCnt]["flag_code"] + "',\n"

            # brtk04059 - We get + set the description from the config file here
            tmpDescr     = self.lookup_for_type (self.myPartyFlag[myLoopCnt]["flag_type"] + self.myPartyFlag[myLoopCnt]["flag_code"], self.myFlagLookJson)
            tmpStr = tmpStr + "       '" + tmpDescr["user_def"] + "',\n"
            tmpStr = tmpStr + "       '" + tmpDescr["descr"] + "',\n"

            tmpStr = tmpStr + "       current_timestamp,\n"
            tmpStr = tmpStr + "       1,\n"
            tmpStr = tmpStr + "       'SQL_UTIL'\n"
            tmpStr = tmpStr + ";\n"
            tmpStr = tmpStr + "\n"

            myLoopCnt = myLoopCnt + 1

        return tmpStr

    def genr_sql_narr (self):
        myLoopTot = len (self.myPartyNarr)
        myLoopCnt = 0
        tmpStr = ""

        tmpStr = tmpStr + "DELETE FROM party_narrative WHERE party_ref = '" + self.myCurrPartyRef + "'"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"

        while (myLoopCnt < myLoopTot):
            tmpStr = tmpStr + "INSERT INTO party_narrative\n"
            tmpStr = tmpStr + "SELECT '" + self.myPartyNarr[myLoopCnt]["party_ref"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyNarr[myLoopCnt]["narr_type"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyNarr[myLoopCnt]["narrative"] + "',\n"

            # brtk04059 - We get + set the description from the config file here
            tmpDescr     = self.lookup_for_type (self.myPartyNarr[myLoopCnt]["narr_type"], self.myNarrLookJson)
            tmpStr = tmpStr + "       '" + tmpDescr["user_def"] + "',\n"
            tmpStr = tmpStr + "       '" + tmpDescr["descr"] + "',\n"

            tmpStr = tmpStr + "       current_timestamp,\n"
            tmpStr = tmpStr + "       1,\n"
            tmpStr = tmpStr + "       'SQL_UTIL'\n"
            tmpStr = tmpStr + ";\n"
            tmpStr = tmpStr + "\n"

            myLoopCnt = myLoopCnt + 1

        return tmpStr

    def genr_sql_assoc (self):
        myLoopTot = len (self.myPartyAssoc)
        myLoopCnt = 0
        tmpStr = ""

        tmpStr = tmpStr + "DELETE FROM party_assoc WHERE party_ref = '" + self.myCurrPartyRef + "'"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"

        while (myLoopCnt < myLoopTot):
            tmpStr = tmpStr + "INSERT INTO party_assoc\n"
            tmpStr = tmpStr + "SELECT '" + self.myPartyAssoc[myLoopCnt]["party_ref"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyAssoc[myLoopCnt]["assoc_type"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyAssoc[myLoopCnt]["assoc_party_ref"] + "',\n"

            # brtk04059 - We get + set the description from the config file here
            tmpDescr     = self.lookup_for_type (self.myPartyAssoc[myLoopCnt]["assoc_type"], self.myAssocLookJson)
            tmpStr = tmpStr + "       '" + tmpDescr["user_def"] + "',\n"
            tmpStr = tmpStr + "       '" + tmpDescr["descr"] + "',\n"

            tmpStr = tmpStr + "       current_timestamp,\n"
            tmpStr = tmpStr + "       1,\n"
            tmpStr = tmpStr + "       'SQL_UTIL'\n"
            tmpStr = tmpStr + ";\n"
            tmpStr = tmpStr + "\n"

            myLoopCnt = myLoopCnt + 1

        return tmpStr

    def genr_sql_instr (self):
        myLoopTot = len (self.myPartyInstr)
        myLoopCnt = 0
        tmpStr = ""

        tmpStr = tmpStr + "DELETE FROM party_instr WHERE party_ref = '" + self.myCurrPartyRef + "'"
        tmpStr = tmpStr + ";\n"
        tmpStr = tmpStr + "\n"

        while (myLoopCnt < myLoopTot):
            tmpStr = tmpStr + "INSERT INTO party_instr\n"
            tmpStr = tmpStr + "SELECT '" + self.myPartyInstr[myLoopCnt]["party_ref"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyInstr[myLoopCnt]["instr_type"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyInstr[myLoopCnt]["instr_ref_type"] + "',\n"
            tmpStr = tmpStr + "       '" + self.myPartyInstr[myLoopCnt]["instr_ref"] + "',\n"

            # brtk04059 - We get + set the description from the config file here
            tmpDescr     = self.lookup_for_type (self.myPartyInstr[myLoopCnt]["instr_type"], self.myInstrLookJson)
            tmpStr = tmpStr + "       '" + tmpDescr["user_def"] + "',\n"
            tmpStr = tmpStr + "       '" + tmpDescr["descr"] + "',\n"

            tmpStr = tmpStr + "       current_timestamp,\n"
            tmpStr = tmpStr + "       1,\n"
            tmpStr = tmpStr + "       'SQL_UTIL'\n"
            tmpStr = tmpStr + ";\n"
            tmpStr = tmpStr + "\n"

            myLoopCnt = myLoopCnt + 1

        return tmpStr

    # Return the SQL string for processing
    def get_sql_str (self):

        return self.mySqlStr

    # A generic method for loading a JSON file with descriptions of items
    def load_lookup_file (self, myLookupFile):
        myLookupFileName = "./config/" + myLookupFile
        myLookupFile     = open (myLookupFileName, "r", True, "utf8")
        myLookupFileJson = myLookupFile.read ()
        myLookupJson     = json.loads (myLookupFileJson)

        return myLookupJson

    # A generic method that looks up descriptions from the JSON object for classes, references etc
    # which returns a dict object with the value description + if it is user definable or not
    def lookup_for_type (self, myForType, myLookJson):
        tmpStr = ""
        tmpDescr = {"descr": "TBC - to be confirmed", "user_def": "N"}

        for myType in myLookJson:
            if (myType == myForType):
                tmpStr = myLookJson[myType]
                break

        try:
            tmpDescrStr = tmpStr[0:tmpStr.index(",")]
            tmpDescr["descr"] = tmpDescrStr
        except:
            tmpDescrStr = ""

        try:
            tmpUserDef  = tmpStr[tmpStr.index(",")+1:len(tmpStr)]
            tmpDescr["user_def"] = tmpUserDef
        except:
            tmpUserDef  = ""

        return tmpDescr
