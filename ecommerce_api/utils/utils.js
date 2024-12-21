// /utils/tokenUtils.js
const jwt = require('jsonwebtoken');


const createToken = (user) => {
    const payload = {
        userId: user.id,
        username: user.username,
    };

    const options = {
        expiresIn: '1h',
    };

    return jwt.sign(payload, '12345', options);
};

module.exports = { createToken };