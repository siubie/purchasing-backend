var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    waste = mongoose.model('waste');

module.exports = function(app) {
    app.use('/purchasing', router);
};

router.route('/waste')
    .get(function(req, res, next) {
        waste.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        var now = new Date();
        req.body.kode = "WST" + now.getTime();
        waste.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route('/waste/:id')
    .get(function(req, res, next) {
        waste.findOne({
            'kode': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        waste.findOneAndUpdate({
            'kode': req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        waste.findOneAndRemove({
            'kode': req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });