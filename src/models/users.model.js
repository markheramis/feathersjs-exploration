const NeDB = require('nedb'); // @depricated
const path = require('path'); // @depricated


module.exports = function (app) {
	console.log('creating user connection');
	var Model = require('knex')({
		client:'pg',
		version:'8.4',
		connection:{
			host:'127.0.0.1',
			user:'master',
			password:'m4rkh3r4m15',
			database:'pean_dev'
		}
	});
	// Connect to database.
	/*
	Model.schema.createTableIfNotExists('users',function(table){
		console.log('Creating users table');
		table.increments('id');
		table.string('email');
		table.string('password');
		table.string('avatar');
	});
	*/
	Model.schema.dropTableIfExists('users',function(table){
		console.log('Dropping users table');
		return Model.schema.createTable('users',function(table){
			console.log('Creating users table');
			table.increments('id');
			table.string('email');
			table.string('password');
			table.string('avatar');
		})
	})
	return Model;
};
