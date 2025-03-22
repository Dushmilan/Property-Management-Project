// A controller typically acts as an intermediary between the application's request/response cycle and the business logic or services.
// It handles HTTP requests and is responsible for processing the incoming data, invoking the appropriate business logic, and then returning the response.

const testService = require('../../services/v1/test.service');

const testController = {
  testPost: async (req, res) => {
    try {
      const postData = ({ name, age } = req.body);

      const response = await testService.testPost(postData);
      const { success, status, data } = response;

      return res.status(status).json({
        success: success,
        response: {
          status: status,
          data: data,
        },
      });
    } catch (error) {
      // TODO: call to error handler middleware

      res.status(500).json({
        success: false,
        data: {
          message: error.message,
        },
      });
    }
  },
};

module.exports = testController;
