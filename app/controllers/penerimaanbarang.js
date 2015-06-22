var express = require("express"),
    router = express.Router(),
    mongoose = require("mongoose"),
    penerimaanBarang = mongoose.model("penerimaanBarang");

module.exports = function(app) {
    app.use("/purchasing", router);
};

router.route("/penerimaanbarang")
    .get(function(req, res, next) {
        penerimaanBarang.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        req.body.nomor = "LPB" + new Date().getTime();
        penerimaanBarang.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route("/penerimaanbarang/:id")
    .get(function(req, res, next) {
        penerimaanBarang.findOne({
            "nomor": req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        penerimaanBarang.findOneAndUpdate({
            "nomor": req.params.id
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        penerimaanBarang.findOneAndRemove({
            "nomor": req.params.id
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });