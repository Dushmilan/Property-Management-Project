

const { Router } = require('express');
const { SignupController,IsExistUser } = require('../Controller/UserController');
const UserRouter = Router();

// Define the signup route
UserRouter.post('/signup', async (req, res) => {
    try {
        await IsExistUser(req.body.username);
        if (userExists) {
            return res.status(400).send('Username already exists');
        }
        await SignupController(req.body);
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = UserRouter;