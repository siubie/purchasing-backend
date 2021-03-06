var express = require("express"),
    router = express.Router(),
    mongoose = require("mongoose"),
    satuanGudang = mongoose.model("satuanGudang");

module.exports = function(app) {
    app.use("/purchasing", router);
};

router.route("/satuangudang")
    .get(function(req, res, next) {
        satuanGudang.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        satuanGudang.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route("/satuangudang/:id")
    .get(function(req, res, next) {
        satuanGudang.findOne({
            "satuan": req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        satuanGudang.findOneAndUpdate({
            "satuan": req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        satuanGudang.findOneAndRemove({
            "satuan": req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });