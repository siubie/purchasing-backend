var express = require("express"),
    router = express.Router(),
    mongoose = require("mongoose"),
    katalogBarang = mongoose.model("katalogBarang");

module.exports = function(app) {
    app.use("/purchasing", router);
};

router.route("/katalogbarang")
    .get(function(req, res, next) {
        katalogBarang.find(function(err, result) {
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

router.route("/katalogbarang/:id1/:id2")
    .get(function(req, res, next) {
        katalogBarang.findOne({
            "barang.kode": req.params.id1,
            "supplier.kode": req.params.id2
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        katalogBarang.findOneAndUpdate({
            "barang.kode": req.params.id1,
            "supplier.kode": req.params.id2
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        katalogBarang.findOneAndRemove({
            "barang.kode": req.params.id1,
            "supplier.kode": req.params.id2
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });