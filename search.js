const readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);

rl.question('Enter the username to get their tweets: ', name => {
	var params = {
		screen_name: name,
		count: 2,
	};

	T.get(`statuses/user_timeline`, params, searchedData);

	rl.close();
});

function searchedData(err, data, response) {
	console.log(data);
}
