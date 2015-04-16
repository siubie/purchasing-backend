var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    returBarang = mongoose.model('returBarang');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/returbarang')
    .get(function(req, res, next) {
        returBarang.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        req.body.nomor = "LPBR" + new Date().getTime();
        returBarang.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/returbarang/:id')
    .get(function(req, res, next) {
        returBarang.findOne({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        returBarang.findOneAndUpdate({
            'nomor': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        returBarang.findOneAndRemove({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });