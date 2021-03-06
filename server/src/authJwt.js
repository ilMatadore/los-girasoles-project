const jwt = require('jsonwebtoken');
// const db = require('./models/users.model')
require('dotenv').config();

function verifyToken(req, res, next) {
    let token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: "No token provided"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        // console.log(req.body)
        // req.user.id = decoded.id;
        next();
    })
}

module.exports = {
    verifyToken
}