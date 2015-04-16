var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    barang = mongoose.model('barang');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/barang')
    .get(function(req, res, next) {
        barang.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        req.body.kode = "BRG" + new Date().getTime();
        barang.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/barang/:id')
    .get(function(req, res, next) {
        barang.findOne({
            'kode': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        barang.findOneAndUpdate({
            'kode': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        barang.findOneAndRemove({
            'kode': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });