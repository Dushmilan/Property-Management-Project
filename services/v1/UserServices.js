const connection = require('../../Database/sql/connection');
const bcrypt = require('bcrypt');

const UserServices = {
    async SignupService(userData) {
        try {
            // Validate required fields
            const requiredFields = ['username', 'email', 'password'];
            const missingFields = requiredFields.filter(field => !userData[field]);
            
            if (missingFields.length > 0) {
                throw {
                    status: 400,
                    message: `Missing required fields: ${missingFields.join(', ')}`
                };
            }

            // Check if user already exists
            const [existingUser] = await connection.promise().query(
                'SELECT * FROM users WHERE email = ?',
                [userData.email]
            );

            if (existingUser.length > 0) {
                throw {
                    status: 400,
                    message: 'User with this email already exists'
                };
            }

            // Hash password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

            // Insert new user
            const [result] = await connection.promise().query(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                [userData.username, userData.email, hashedPassword]
            );

            return {
                success: true,
                status: 201,
                data: {
                    userId: result.insertId,
                    message: 'User registered successfully'
                }
            };

        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    }
};

module.exports = UserServices;