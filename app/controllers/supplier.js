var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    supplier = mongoose.model('supplier');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/supplier')
    .get(function(req, res, next) {
        supplier.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        req.body.kode = "SUP" + new Date().getTime();
        supplier.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/supplier/:id')
    .get(function(req, res, next) {
        supplier.findOne({
            'kode': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        supplier.findOneAndUpdate({
            'kode': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        supplier.findOneAndRemove({
            'kode': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });