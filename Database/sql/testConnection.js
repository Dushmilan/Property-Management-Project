const connection = require('./connection');

// Test the connection
connection.query('SELECT 1', (err, results) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Database connection successful!');
    process.exit(0);
});
