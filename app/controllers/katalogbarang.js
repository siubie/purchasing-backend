var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    katalogBarang = mongoose.model('katalogBarang');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/katalogbarang')
    .get(function(req, res, next) {
        katalogBarang.find({}, '-_id -__v', function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        katalogBarang.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/katalogbarang/:id')
    .get(function(req, res, next) {
        katalogBarang.findOne({
            'nomor': req.params.id
        }, '-_id -__v', function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        katalogBarang.findOneAndUpdate({
            'nomor': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        katalogBarang.findOneAndRemove({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });