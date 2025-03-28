const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error(
      `Error connecting to the database: ${err.code} - ${err.message}`
    );
    process.exit(1); // exit with failure status
  }

  const message =
    process.env.NODE_ENV === 'production'
      ? 'Successfully connected to database!'
      : `Successfully connected to database with connection id ${connection.threadId}!`;

  console.log(message);
});

module.exports = connection;
