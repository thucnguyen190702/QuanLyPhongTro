var express = require('express');
var router = express.Router();
var apiUser = require('../controllers/api.user.controller');
router.post('/user/reg', apiUser.postRegister);
router.post('/user/login', apiUser.postLogin);
module.exports = router;
