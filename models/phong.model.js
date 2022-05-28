const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thucnguyen1907:thucnguyen1907@cluster0.k8cgd.mongodb.net/quanlyphongtro');
const phongSchema =new mongoose.Schema({
    idloaiphong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LoaiPhong'
    },
    tinhtrang : 'Number',
});
const Phong = mongoose.model('Phong', phongSchema);
module.exports = Phong;