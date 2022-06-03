var phongController = require('../controllers/phong.controller');
var express = require('express');
var multer = require('multer');
var router = express.Router();
router.get('/list', phongController.getListPhong);
router.get('/add', phongController.getAddPhong);
router.post('/add', phongController.postAddPhong);

var multerupload = multer({dest: './tmp/'});
router.get('/addimage/:id', phongController.getAddPhoto);
router.post('/addimage/:id', multerupload.array('hinhanh', 10),phongController.postAddPhoto);
module.exports = router;