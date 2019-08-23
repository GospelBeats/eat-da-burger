// required dependencies
const mysql = require('mysql');

// Create MySQL connection object
let connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	})
};

// Make connection to MySQL
connection.connect(function(e) {
  if (e) {
    console.error('MySQL connection ERROR: ' + e.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database - id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;