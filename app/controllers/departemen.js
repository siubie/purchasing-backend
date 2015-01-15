var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
departemen = mongoose.model('departemen');

module.exports = function (app) {
	app.use('/purchasing', router);
};

router.route('/departemen')
.get(function(req, res, next){
	departemen.find({},'-_id kdDept departemen',function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.post(function(req, res, next){
	departemen.create(req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
});

router.route('/departemen/:id')
.get(function(req, res, next){
	departemen.findOne({'kdDept':req.params.id},'-_id kdDept departemen',function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.put(function(req, res, next){
	departemen.findOneAndUpdate({'kdDept':req.params.id},req.body,function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})
.delete(function(req, res, next){
	departemen.findOneAndRemove({'kdDept':req.params.id},function(err, result){
		if(err)
		return next(err)
		else
		res.json(result);
	});
})