var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the path to the tag file? ', (answer) => {
	filePath = '/PATH/TO/LOCAL/FILE/' + answer;
	fs.readFile(filePath, (err, buffer) => {
		if (err) {
			console.log('Problem! Danger! Error! ', err.message);
		} else {
			var begining = /(Insert)/g;
			var end = /(here)/gi;
			var text = buffer.toString().replace(begining, '{{Insert').replace(end, 'here}}');
			fs.writeFile(filePath, text, (err) => {
				if (err) console.log(err);
				console.log('saved file');
			});
		}
	});
	rl.close();
});