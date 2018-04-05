### Bracket Inserter

This is a little script to take care of one of the more tedious tasks I have to do here at work.

I generate these txt files and then have to go in and add variables (these are provided in a JIRA ticket) add double-curleys to the variables (because the variables from the ticket aren't written correctly) and then rename the text file.

So, this script can be run and will generate a new txt file in the directory where you run the script.

So for example if you type in

```
node /path/to/script/bracket-inserter.js
```

within the Downloads folder, the new txt file will be in the Downloads folder.

The script asks for two things:
* the name of the file (it assumes the path to the file is to the Downloads foler)
* the extra parts of the new name (this takes the form of blah_blah_blah_  make sure you put that last underscore there)