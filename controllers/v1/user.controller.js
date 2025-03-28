const UserServices = require('../../services/v1/UserServices');

const userController = {
    signup: async (req, res) => {
        try {
            const response = await UserServices.SignupService(req.body);
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
    }
}

module.exports = userController;
