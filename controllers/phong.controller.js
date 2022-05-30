var PhongModel = require('../models/phong.model');
var LoaiPhong = require('../models/loaiphong.model');
exports.getListPhong = async (req,res,next)=>{
    let phong = await PhongModel.find();
    res.render('phong/list',{
        phong: phong
    });
}
exports.getListLP = async function(req, res) {


    res.render('./phong/add');
};
exports.getAddPhong = async (req,res,next)=>{
    let listLP =await LoaiPhong.find();
    console.log(listLP);

    res.render('./phong/add',{listLP: listLP});
}

exports.postAddPhong = async (req,res,next)=>{
    let phong = new PhongModel({
        tenphong: req.body.tenphong,
        idloaiphong: req.body.idloaiphong,
        giaphong: req.body.giaphong,
        mota: req.body.mota
    });
    await phong.save();
    res.redirect('/phong/list');
}
