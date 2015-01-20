var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
permintaanBarang = mongoose.model('permintaanBarang');

module.exports = function (app) {
	app.use('/purchasing', router);
};

router.route('/permintaanbarang')
.get(function(req, res, next){
	permintaanBarang.find(req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.post(function(req, res, next){
	permintaanBarang.create(req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
});

router.route('/permintaanbarang/:id')
.get(function(req, res, next){
	permintaanBarang.findOne({'noSpp':req.params.id},req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.put(function(req, res, next){
	permintaanBarang.findOneAndUpdate({'noSpp':req.params.id},req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.delete(function(req, res, next){
	permintaanBarang.findOneAndRemove({'noSpp':req.params.id},function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
