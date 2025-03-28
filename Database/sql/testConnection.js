const connection = require('./connection');

// Test the connection
connection.query('SELECT 1', (err, results) => {
  if (err) {
    console.error('Database connection failed:', err.code, err.message);
    connection.end(() => process.exit(1)); // gracefully close the connection before exiting
    return;
  }

  console.log('Database connection successful!');
  connection.end(() => process.exit(0)); // disconnection
});
