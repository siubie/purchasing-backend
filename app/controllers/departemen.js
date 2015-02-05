var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    departemen = mongoose.model('departemen');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/departemen')
    .get(function(req, res, next) {
        departemen.find({}, '-_id -__v', function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        departemen.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/departemen/:id')
    .get(function(req, res, next) {
        departemen.findOne({
            'kode': req.params.id
        }, '-_id -__v', function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        departemen.findOneAndUpdate({
            'kode': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        departemen.findOneAndRemove({
            'kode': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });