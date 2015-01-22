var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
kategoriBarang = mongoose.model('kategoriBarang');

module.exports = function (app) {
	app.use('/purchasing', router);
};

router.route('/kategoribarang')
.get(function(req, res, next){
	kategoriBarang.find({},'-_id -__v',function(err, result){
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
	kategoriBarang.findOne({'kode':req.params.id},'-_id -__v',function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.put(function(req, res, next){
	kategoriBarang.findOneAndUpdate({'kode':req.params.id},req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.delete(function(req, res, next){
	kategoriBarang.findOneAndRemove({'kode':req.params.id},function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
