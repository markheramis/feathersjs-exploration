module.exports = function () {
	const app = this;
	/*
	@question: I need to get the database element in the config/default.json, why is this not working?
	
	const config = app.get('database');
	*/
	const db = require('knex')({
		client:'pg',
		version:'8.4',
		connection:{
			host:'127.0.0.1',
			user:'master',
			password:'m4rkh3r4m15',
			database:'pean_dev'
		}
	});
	app.set('knexClient', db);
};
