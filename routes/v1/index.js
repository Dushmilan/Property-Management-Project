// Purpose of this index file is to organize and group routes under the /v1 version, acting as a central point for versioned API routing.
// It typically imports and mounts individual route files (test.routes.js in this case) under a specific version path, such as /v1.

const express = require('express');
const testRouter = require('./test.routes');
const userRouter = require('./user.routes');
const routesV1 = express.Router();

routesV1.use('/test', testRouter);
routesV1.use('/user', userRouter);

module.exports = routesV1;
