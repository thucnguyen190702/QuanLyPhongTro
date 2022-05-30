var phongController = require('../controllers/phong.controller');
var express = require('express');
var router = express.Router();
router.get('/list', phongController.getListPhong);
router.get('/add', phongController.getAddPhong);
router.post('/add', phongController.postAddPhong);
module.exports = router;