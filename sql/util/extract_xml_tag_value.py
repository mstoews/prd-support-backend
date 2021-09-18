#! /usr/local/bin/python3
#
#  +++begin copyright+++ **********************************
#                                                         *
#  BROADRIDGE CONFIDENTIAL INFORMATION: FIRST CLASS       *
#  COPYRIGHT (c) Broadridge (Japan) Limited               *
#                                                         *
#  This  program  contains  confidential and proprietary  *
#  information  of  Broadridge (Japan) Ltd., and any      *
#  reproduction,  disclosure, or use in whole or in part  *
#  is   expressly   prohibited,   except   as   may   be  *
#  specifically authorized by prior written agreement or  *
#  permission of Broadridge, Purveyors of Fine Software.  *
#                                                         *
#  +++end copyright+++ ************************************
#
#
# NAME        : extract_xml_tag_value.py
#
# DESCRIPTION : Python routines for handling XML msgs
#
# AMENDMENT HISTORY:
#
# Version no.    Description                        Author          Date
#
# gl2411883      Created                            Shanen Liu      Sep 26 2019
#
# brtk04050      Updated to add new methods and     James Marsden   26-Nov-2020
#                better handing of sub-msgs.        (RJM)
#
# jpti-728       Added the "standalone" pattern     James Marsden   26-Jul-2021
#                for substitution of the UTF8 str   (RJM)
#
# jpti-739       Handling 3rd alais tag in msgs     James Marsden   31-Jul-2021
#                so that we can process party       (RJM)
#                account messages.
#

from lxml import etree, objectify
import xml.etree.ElementTree as ET

class Extract_Tag:
    def __init__(self, xmlstring, myUseShortTags, myQual1, myQual2, myQual3): 
        # Replace the UTF-8 definition etc
        self.myXmlstring = self.prep_xml_str (xmlstring, myUseShortTags, myQual1, myQual2, myQual3)

        # Processing other tables
        self.myParser    = etree.XMLParser(recover=True)
        self.myTree      = tree = ET.ElementTree(ET.fromstring(self.myXmlstring, parser=self.myParser))
        self.myRoot      = tree.getroot()
        self.myTarget    = ""

        return

    def prep_xml_str (self, tmpXmlString, myUseShortTags, myQual1, myQual2, myQual3):
        tmpXmlString = tmpXmlString.replace ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "")
        tmpXmlString = tmpXmlString.replace ("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", "")

        if (myUseShortTags == "Y" and myQual1 != ""):
            tmpXmlString = tmpXmlString.replace ("<"  + myQual1 + ":",  "<")
            tmpXmlString = tmpXmlString.replace ("</" + myQual1 + ":",  "</")

        if (myUseShortTags == "Y" and myQual2 != ""):
            tmpXmlString = tmpXmlString.replace ("<"  + myQual2 + ":",  "<")
            tmpXmlString = tmpXmlString.replace ("</" + myQual2 + ":", "</")

        if (myUseShortTags == "Y" and myQual3 != ""):
            tmpXmlString = tmpXmlString.replace ("<"  + myQual3 + ":",  "<")
            tmpXmlString = tmpXmlString.replace ("</" + myQual3 + ":", "</")

        return tmpXmlString

    def set_target_tag (self, myTag):
        self.myTarget    = myTag

        return
    
    def extract_xml_tag (self) :
        for children in list(self.myRoot):
            if self.myTarget == children.tag[-(len(self.myTarget)):]:
                return children.text

    def get_sub_msg (self, myRoot, myMsg, mySubMsgCnt):
        mySubMsgLst = []

        for myElement in myRoot:
            mySubMsg    = {"myLevel": "", "subMsg": myMsg, "tagName": "", "tagValue": ""}
            hasSubMsg   = False

            # More sub-msgs exist, so we need to recursively call
            if (myElement.text is None):
                hasSubMsg         = True
                mySubMsgType      = myElement.tag
                mySubElement      = myElement.getchildren ()
                mySubMsgCnt       = mySubMsgCnt + 1
                mySubSubMsgLst    = self.get_sub_msg (mySubElement, mySubMsgType, mySubMsgCnt + 1)
                mySubMsgLst       = mySubMsgLst + mySubSubMsgLst

            # We are at the lowest level, so collect the tags
            if (hasSubMsg == False):
                mySubMsg["myLevel"]  = mySubMsgCnt
                mySubMsg["tagName"]  = myElement.tag
                mySubMsg["tagValue"] = myElement.text
                mySubMsgLst.append (mySubMsg)

        return mySubMsgLst

    def get_sub_msg_parent (self, myMsg):
        return self.get_sub_msg (self.myRoot, myMsg, 0)
