const jwt = require('jsonwebtoken');
const User = require('../models/user.model')
 require('dotenv').config();
const hiddenString = process.env.TOKEN_SEC_KEY;

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, hiddenString);
    try {
        const user = await User.findOne({_id: data._id, 'tokens.token': token});
        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({
            error: 'Not Aithorized to access this resource' +
                'module.exports=aut;'
        })
    }
}
module.exports = auth;