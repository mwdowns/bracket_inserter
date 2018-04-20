### Bracket Inserter

This is a little script to take care of one of the more tedious tasks I have to do here at work.

I generate these txt files and then have to go in and add variables (these are provided in a JIRA ticket), add double-curleys to the variables (because the variables from the ticket aren't written correctly), and then rename the text file.

So, this script can be run and will generate a new txt file in the Downloads directory with the new name and delete the old txt file.

To run from the app directory

```
node bracket-inserter.js
```

To run from anywhere else

```
node /path/to/script/bracket-inserter.js
```

The script asks for two things:
* the name of the file (it assumes the path to the file is to the Downloads folder)
* the extra parts of the new name (this takes the form of blah_blah_blah_  make sure you put that last underscore there)

So, for example, if you have a data collection tag called lexus_20180406.txt and you run the script, you answer "lexus_20180406.txt" for the first question and "com_data_collection_tag_" for the second. You will get a new file called lexus_com_data_collection_tag_20180406.txt with the double-curley brackets inserted (if there are p variables...if there are no p variables, then it just renames the file);

NOTE: for now, don't worry about the ts files. That's just a personal experiment with writing this simple script in the ts format.