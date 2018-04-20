var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the path to the tag file? ', (textFile) => {
	rl.question('What do you want to add to the tag name? ', (newTagName) => {
		var path = '/Users/matthew.downs/Downloads/';
		var filePath =  path + textFile;
		var textFileArr = textFile.split(/([0-9]{8}.txt)$/);
		textFileArr[2] = newTagName;
		var newFileName = path + textFileArr[0] + textFileArr[2] + textFileArr[1];
		fs.readFile(filePath, (err, buffer) => {
			if (err) console.log('Problem! Danger! Error! ', err.message);
			var begining = /(Insert)/g;
			var end = /(here)/gi;
			var text = buffer.toString().replace(begining, '{{Insert').replace(end, 'here}}');
			fs.writeFile(newFileName, text, (err) => {
				if (err) console.log(err);
				console.log('saved file');
			});
			if (textFile != newFileName) {
				fs.unlink(filePath, (err) => {
					if (err) console.log(err);
					console.log('deleted old file');
				});
			}
		});
		rl.close();
	});
});