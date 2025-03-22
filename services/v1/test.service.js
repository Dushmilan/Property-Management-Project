// A service class typically contains the business logic of the application.
// It performs operations such as data processing, and handling complex tasks, and then returns the results to be used by the controller or other components.
// Database interactions can happen here, but personally, I prefer keeping them in a separate DAO/repository layer for easier maintenance.

const testDao = require('../../dao/test.dao');

const testService = {
  testPost: async (data) => {
    const { name, age } = data;

    // validate request data (we can use a separate field_validator class for this)
    if (age <= 0 || age > 100) {
      return {
        success: false,
        status: 400,
        data: {
          message: 'Invalid age!',
        },
      };
    }

    // check user
    const user = await testDao.getUser(name);
    if (!user) {
      return {
        success: false,
        status: 404,
        data: {
          message: 'User not found!',
        },
      };
    }

    // check if user is underage
    if (age < 18) {
      return {
        success: false,
        status: 403,
        data: {
          message: 'Entry denied. Age must be 18 or older.',
        },
      };
    }

    return {
      success: true,
      status: 200,
      data: {
        message: `Welcome, ${name}!`,
      },
    };
  },
};

module.exports = testService;
