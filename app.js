const express = require('express');
const cors = require('cors');
require('dotenv').config();

// import routes
const routesV1 = require('./routes/v1/index');
const routesV2 = require('./routes/v2/index');

// initialize the express app
const app = express();
app.use(cors());
app.use(express.json());

// setup routing paths
app.use('/api/v1', routesV1);
app.use('/api/v2', routesV2);

// TODO: error handler middleware

// start the server
const ENV = process.env.ENV || 'development';
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${ENV} | ${PORT}`);
});
