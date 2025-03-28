// A routes file in a Node.js application typically acts as a router that defines the endpoints of the application and links them to specific controller methods.
// It is responsible for mapping HTTP requests (GET, POST, PUT, DELETE, etc) to the appropriate controller actions, ensuring that the correct function is invoked for each request.

const express = require('express');
const testController = require('../../controllers/v1/test.controller'); 


const testRouter = express.Router();

testRouter.post('/', testController.testPost);


module.exports = testRouter;
