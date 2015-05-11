var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    permintaanBarang = mongoose.model('permintaanBarang');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/permintaanbarang')
    .get(function(req, res, next) {
        permintaanBarang.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        req.body.nomor = "SPP" + new Date().getTime();
        for (i = 0; i < req.body.sppItemsList; i++) {
            req.body.sppItemsList[i].sisa = req.body.sppItemsList[i].jumlah;
        }
        permintaanBarang.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/permintaanbarang/:id')
    .get(function(req, res, next) {
        permintaanBarang.findOne({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        permintaanBarang.findOneAndUpdate({
            'nomor': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        permintaanBarang.findOneAndRemove({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });