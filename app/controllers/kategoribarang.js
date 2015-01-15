var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
kategoriBarang = mongoose.model('kategoriBarang');

module.exports = function (app) {
	app.use('/purchasing', router);
};

router.route('/kategoribarang')
.get(function(req, res, next){
	kategoriBarang.find({},'-_id kdKategori kategori',function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.post(function(req, res, next){
	kategoriBarang.create(req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
});

router.route('/kategoribarang/:id')
.get(function(req, res, next){
	kategoriBarang.findOne({'kdKategori':req.params.id},'-_id kdKategori kategori',function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.put(function(req, res, next){
	kategoriBarang.findOneAndUpdate({'kdKategori':req.params.id},req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.delete(function(req, res, next){
	kategoriBarang.findOneAndRemove({'kdKategori':req.params.id},function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})