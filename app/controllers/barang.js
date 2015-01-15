var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
barang = mongoose.model('barang');

module.exports = function (app) {
	app.use('/purchasing', router);
};

router.route('/barang')
.get(function(req, res, next){
	barang.find({},'-_id kdBarang kategori namaBarang alias satuan deskripsi',function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.post(function(req, res, next){
	barang.create(req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
});

router.route('/barang/:id')
.get(function(req, res, next){
	barang.findOne({'kdBarang':req.params.id},'-_id kdBarang kategori namaBarang alias satuan deskripsi',function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.put(function(req, res, next){
	barang.findOneAndUpdate({'kdBarang':req.params.id},req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.delete(function(req, res, next){
	barang.findOneAndRemove({'kdBarang':req.params.id},function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})