var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    penjualanWaste = mongoose.model('penjualanWaste');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/penjualanwaste')
    .get(function(req, res, next) {
        penjualanWaste.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        penjualanWaste.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/penjualanwaste/:id')
    .get(function(req, res, next) {
        penjualanWaste.findOne({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        penjualanWaste.findOneAndUpdate({
            'nomor': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        penjualanWaste.findOneAndRemove({
            'nomor': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });
