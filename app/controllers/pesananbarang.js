var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    pesananBarang = mongoose.model('pesananBarang');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/pesananbarang')
    .get(function(req, res, next) {
        pesananBarang.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        pesananBarang.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/pesananbarang/:id')
    .get(function(req, res, next) {
        pesananBarang.findOne({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        pesananBarang.findOneAndUpdate({
            'nomor': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        pesananBarang.findOneAndRemove({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });