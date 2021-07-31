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
# NAME        : process_xml_msg.py
#
#
# DESCRIPTION : This module handles XML msg strings passed in lists
#               and converts them to list of dict objects
#
#
# AMENDMENT HISTORY:
#
#
#  Version no.    Description                        Author          Date
#
#  brtk04050      Created by                         James Marsden   26-Nov-2020
#                                                    (RJM)
#
#  jpti-739       Handling of Party Account msgs     James Marsden   31-Jul-2021
#                 is added for import of SSI info    (RJM)
#
#  jpti-740       Handling of Party Account msgs     James Marsden   31-Jul-2021
#                 is added for import of SSI info    (RJM)
#

import os

class process_xml_msg:

    def __init__ (self, myMsgData):
        # This is used to store the party ref as we need to know
        # for every row later, but it only appears in the beginning
        # of the XML string 
        self.myCurrPartyRef   = ""
        self.myCurrDepotAlias = ""

        self.myMsgData    = myMsgData
        self.mySubMsgCnt  = len (self.myMsgData)
        self.myCurrMsg    = []
        self.mySqlStr     = ""
        self.myCurrMsgCnt = 0

        self.myPartyMain     = [{"party_ref": "", "party_type": "", "tempate_ref": "", "party_short_name": "", "party_long_name": "", "party_extra_long_name": "", "active_ind": ""}]
        self.myPartyClass    = []
        self.myPartyRef      = []
        self.myPartyFlag     = []
        self.myPartyNarr     = []
        self.myPartyAssoc    = []
        self.myPartyAssocPrc = False
        self.myPartyInstr    = []
        self.myPartyInstrPrc = False
        self.myPartyAccount  = []

        return

    def process_xml_msg_main (self):
        self.myCurrMsgCnt = 0

        while (self.myCurrMsgCnt < self.mySubMsgCnt):
            self.myCurrMsg = self.myMsgData[self.myCurrMsgCnt]
            self.process_sub_msg ()
            self.myCurrMsgCnt = self.myCurrMsgCnt + 1

        return

    def process_sub_msg (self):
        if (self.myCurrMsg["subMsg"] == "Party" and self.myPartyAssocPrc == False):
            self.process_party_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Classification"):
            self.process_class_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Reference"):
            self.process_ext_ref_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Flag"):
            self.process_flag_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Narrative"):
            self.process_narr_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Association"):
            self.process_assoc_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Party" and self.myPartyAssocPrc == True):
            self.process_assoc_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Instrument"):
            self.process_instr_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "PartyAccount"):
            self.process_party_acc_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "PartyReference"):
            self.process_party_acc_ref_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "CommService"):
            self.process_party_acc_comms_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "DepotAccount"):
            self.process_party_acc_dacc_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "Location"):
            self.process_party_acc_loc_sub_msg ()
        elif (self.myCurrMsg["subMsg"] == "AccountNumber"):
            self.process_party_acc_no_sub_msg ()
        else:
            self.process_other_sub_msg ()

        return

    def process_party_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        myCurrFieldName = self.party_main_map_tag (myCurrTagName)

        if (myCurrFieldName == "party_ref"):
            self.myCurrPartyRef = myCurrTagValue

        if (myCurrFieldName == "active_ind"):
            if (myCurrTagValue == "false" or myCurrTagValue == "0"):
                myCurrTagValue = "A"
            if (myCurrTagValue == "true" or myCurrTagValue == "1"):
                myCurrTagValue = "I"

        if (myCurrFieldName != ""):
            self.myPartyMain[0][myCurrFieldName] = myCurrTagValue

        return

    def process_class_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # If the Type tag is found we are at the beginning of the structure,
        # so start again
        if (myCurrTagName == "Type"):
            self.myPartyClass.append (self.get_new_party_class_sub ())

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyClass) - 1

        myCurrFieldName = self.party_class_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyClass[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_ext_ref_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # If the Type tag is found we are at the beginning of the structure,
        # so start again
        if (myCurrTagName == "Type"):
            self.myPartyRef.append (self.get_new_party_ref_sub ())

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyRef) - 1

        myCurrFieldName = self.party_ref_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyRef[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_flag_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # If the Type tag is found we are at the beginning of the structure,
        # so start again
        if (myCurrTagName == "Type"):
            self.myPartyFlag.append (self.get_new_party_flag_sub ())

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyFlag) - 1

        myCurrFieldName = self.party_flag_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyFlag[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_narr_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # If the Type tag is found we are at the beginning of the structure,
        # so start again
        if (myCurrTagName == "Type"):
            self.myPartyNarr.append (self.get_new_party_narr_sub ())

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyNarr) - 1

        myCurrFieldName = self.party_narr_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyNarr[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_assoc_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # If the Type tag is found we are at the beginning of the structure,
        # so start again
        if (myCurrTagName == "Type" and self.myPartyAssocPrc == False):
            self.myPartyAssocPrc = True
            self.myPartyAssoc.append (self.get_new_party_assoc_sub ())
        else:
            # If we hit this block we are in the assoc party sub msg and
            # Type appears twice so we need to avoid reseting the assoc_type
            if (myCurrTagName == "Type"):
                myCurrTagName   = "Dummy"
            else:
                self.myPartyAssocPrc = False

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyAssoc) - 1

        myCurrFieldName = self.party_assoc_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyAssoc[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_instr_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # If the Type tag is found we are at the beginning of the structure,
        # so start again
        if (myCurrTagName == "Type" and self.myPartyInstrPrc == False):
            self.myPartyInstr.append (self.get_new_party_instr_sub ())
            self.myPartyInstrPrc = True
            # We need to handle the edge case for the 2nd instance of the Type tag
        elif (myCurrTagName == "Type" and self.myPartyInstrPrc == True):
            myCurrTagName        = "InstrRefType"
            self.myPartyInstrPrc = False

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyInstr) - 1

        myCurrFieldName = self.party_instr_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyInstr[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    # jpti-739 - Start
    def process_party_acc_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # If the Origin tag is found we are at the beginning of the structure,
        # so start again
        if (myCurrTagName == "Origin"):
            self.myPartyAccount.append (self.get_new_party_acc_sub ())

        # Sometimes there is another "Type" tag in the SSI XML string which we need to ignore
        if (myCurrTagName == "Type"):
            if myCurrTagValue == "SECP" or myCurrTagValue == "COMP":
                myCurrTagName = "PartyType"

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyAccount) - 1

        myCurrFieldName = self.party_acc_map_tag (myCurrTagName)

        if (myCurrFieldName == "depot_alias"):
            self.myCurrDepotAlias = myCurrTagValue

        if (myCurrFieldName != ""):
            self.myPartyAccount[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_party_acc_ref_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyAccount) - 1

        myCurrFieldName = self.party_acc_ref_map_tag (myCurrTagName)

        # We need to capture the party ref that we are processing
        if (myCurrFieldName == "party_ref"):
            self.myCurrPartyRef = myCurrTagValue

        if (myCurrFieldName != ""):
            self.myPartyAccount[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_party_acc_comms_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyAccount) - 1

        myCurrFieldName = self.party_acc_comms_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyAccount[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_party_acc_dacc_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyAccount) - 1

        myCurrFieldName = self.party_acc_dacc_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyAccount[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_party_acc_loc_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyAccount) - 1

        myCurrFieldName = self.party_acc_loc_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyAccount[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    def process_party_acc_no_sub_msg (self):
        myCurrTagName  = self.myCurrMsg["tagName"]
        myCurrTagValue = self.myCurrMsg["tagValue"]

        # Check how many instances we have currently
        myCurrIdx      = len (self.myPartyAccount) - 1

        myCurrFieldName = self.party_acc_no_map_tag (myCurrTagName)

        if (myCurrFieldName != ""):
            self.myPartyAccount[myCurrIdx][myCurrFieldName] = myCurrTagValue

        return

    # jpti-739 - End

    def process_other_sub_msg (self):
        return

    def party_main_map_tag (self, myCurrTagName):
        myTagMap = {"OriginReference": "party_ref", "Type": "party_type", "Name": "party_short_name", "LongName": "party_long_name", "ExtraLongName": "party_extra_long_name", "Inactive": "active_ind"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_class_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "class_type", "Classification": "class_code"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_ref_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "party_ext_ref_type", "Reference": "party_ext_ref"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_flag_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "flag_type", "Flag": "flag_code"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_narr_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "narr_type", "Narrative": "narrative"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_assoc_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "assoc_type", "Value": "assoc_party_ref"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_instr_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "instr_type", "InstrRefType": "instr_ref_type", "Value": "instr_ref"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_acc_map_tag (self, myCurrTagName):
        myTagMap = {"OriginReference": "party_ref", "Alias": "depot_alias", "Description": "depot_descr", "Type": "depot_type", "AccountName": "account_name"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_acc_ref_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "", "Value": "party_ref"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_acc_comms_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "", "Value": "comms_service"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    # jpti-740 - added
    def party_acc_dacc_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "", "Value": "dacc_ref"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_acc_loc_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "", "Value": "depo_ref"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    def party_acc_no_map_tag (self, myCurrTagName):
        myTagMap = {"Type": "", "Number": "account_no"}

        try:
            return myTagMap[myCurrTagName]
        except KeyError:
            return ""

    # Return a new structure for the class sub msg
    def get_new_party_class_sub (self):
        myNewClass = {"party_ref": self.myCurrPartyRef, "class_type": "", "class_code": ""}

        return myNewClass

    # Return a new structure for the ref sub msg
    def get_new_party_ref_sub (self):
        myNewRef   = {"party_ref": self.myCurrPartyRef, "party_ext_ref_type": "", "party_ext_ref": ""}

        return myNewRef

    # Return a new structure for the flag sub msg
    def get_new_party_flag_sub (self):
        myNewFlag  = {"party_ref": self.myCurrPartyRef, "flag_type": "", "flag_code": ""}

        return myNewFlag

    # Return a new structure for the narrative sub msg
    def get_new_party_narr_sub (self):
        myNewNarr  = {"party_ref": self.myCurrPartyRef, "narr_type": "", "narrative": ""}

        return myNewNarr

    # Return a new structure for the association sub msg
    def get_new_party_assoc_sub (self):
        myNewAssoc = {"party_ref": self.myCurrPartyRef, "assoc_type": "", "assoc_party_ref": ""}

        return myNewAssoc

    # Return a new structure for the instrument sub msg
    def get_new_party_instr_sub (self):
        myNewInstr = {"party_ref": self.myCurrPartyRef, "instr_type": "", "instr_ref_type": "", "instr_ref": ""}

        return myNewInstr

    # Return a new structure for the party acc sub msg
    def get_new_party_acc_sub (self):
        myNewAcc = {"party_ref": self.myCurrPartyRef, "depot_alias": "", "depot_descr": "", "depot_type": "", "comms_service": "", "dacc_ref": "", "account_no": "", "account_name": "", "depo_ref": "", "active_ind": "A", "user_def": "Y", "description": "SSI Information"}

        return myNewAcc

    def get_party_ref (self):
        return self.myCurrPartyRef
    
    def get_depot_alias (self):
        return self.myCurrDepotAlias
    
    def get_party_main (self):
        return self.myPartyMain
    
    def get_party_class (self):
        return self.myPartyClass

    def get_party_refs (self):
        return self.myPartyRef

    def get_party_flag (self):
        return self.myPartyFlag

    def get_party_narr (self):
        return self.myPartyNarr

    def get_party_assoc (self):
        return self.myPartyAssoc

    def get_party_instr (self):
        return self.myPartyInstr

    # jpti-739 - added
    def get_party_acc (self):
        return self.myPartyAccount

    