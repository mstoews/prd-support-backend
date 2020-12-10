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
#               to SQL sattements for the party model
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

import os

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

        self.mySqlStr     = ""

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
            tmpStr = tmpStr + "       'Y',\n"
            tmpStr = tmpStr + "       'TBC',\n"
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
            tmpStr = tmpStr + "       'Y',\n"
            tmpStr = tmpStr + "       'TBC',\n"
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
            tmpStr = tmpStr + "       'Y',\n"
            tmpStr = tmpStr + "       'TBC',\n"
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
            tmpStr = tmpStr + "       'Y',\n"
            tmpStr = tmpStr + "       'TBC',\n"
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
            tmpStr = tmpStr + "       'Y',\n"
            tmpStr = tmpStr + "       'TBC',\n"
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
            tmpStr = tmpStr + "       'N',\n"
            tmpStr = tmpStr + "       'Base Ccy',\n"
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