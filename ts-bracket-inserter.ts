var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the path to the tag file? ', (textFile: string) => {
	rl.question('What do you want to add to the tag name? ', (newTagName: string) => {
		let path = '/Users/matthew.downs/Downloads/';
		let filePath =  path + textFile;
		let textFileArr = textFile.split(/([0-9]{8}.txt)$/);
		textFileArr[2] = newTagName;
		let newFileName = path + textFileArr[0] + textFileArr[2] + textFileArr[1];
		fs.readFile(filePath, (err: Error, buffer: object) => {
			if (err) console.log('Problem! Danger! Error! ', err.message);
			let begining = /(Insert)/g;
			let end = /(here)/gi;
			let text = buffer.toString().replace(begining, '{{Insert').replace(end, 'here}}');
			fs.writeFile(newFileName, text, (err: Error) => {
				if (err) console.log(err.message);
				console.log('saved file');
			});
			if (textFile != newFileName) {
				fs.unlink(filePath, (err: Error) => {
					if (err) console.log(err.message);
					console.log('deleted old file');
				});
			}
		});
		rl.close();
	});
});