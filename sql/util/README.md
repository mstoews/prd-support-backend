# Party Import Tool

## Purpose

* The purpose of the tool is to import parties from PP into the Config Tool
* Any party type can be imported from the PP database
* Not all XML blocks are captured at the moment e.g. rates are missing

## Party Import Usage

* 1st of all install python onto your machine
* Import lxml python package using:
````bash
pip install lxml
````

* Capture a party from the PP database in your source environment for example:
````bash
select * from parties where party_id = "MIZSEC TOK"

````
* Copy the XML string section and paste "as is" into a new text file
* For example, in Notepad++ make a new file "MIZSEC-TOK.xml" 
* Save in your C drive e.g. /c/temp/pcfeedxml folder
* In the gloss-api-backend/sql/util folder edit `run_import.sh` file
* Set the `XML_FILE` variable as the target file name
* Make sure the /c/temp/sql folder exists on your machine (make it if it doesn't)
* Execute the import script as:
````bash
./run_import.sh
````

## SSI Party Import
* Capture SSIs from the pp database:
```bash
SELECT details FROM party_accounts WHERE party_id = "MIZSEC TOK" AND status = "A"

````

* Save in your C drive e.g. /c/temp/pcfeedxml folder
* For example, in Notepad++ make a new file "MIZSEC-TOK-ACC.xml" 
* Edit the parameters in the `run_import_acc.sh` script as appropriate
* Execute the import script as:
````bash
./run_import_acc.sh
````

## Further proposed improvements

 * Some SQL blocks are not generated and those need to be handled
 * Setting up as a containerized webservice so that it's more simple to operate 
