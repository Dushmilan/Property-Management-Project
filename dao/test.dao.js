// The DAO (Data Access Object) layer is responsible for abstracting the database interactions in an application.
// It handles operations like fetching, saving, updating, and deleting data from the database, isolating the rest of the application from the specific details of the data source.

const testDao = {
  getUser: async (userName) => {
    // simulate the database interaction to search for a user
    return userName === 'John Doe';
  },
};

module.exports = testDao;
