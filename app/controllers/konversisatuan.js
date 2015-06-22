var express = require("express"),
    router = express.Router(),
    mongoose = require("mongoose"),
    konversiSatuan = mongoose.model("konversiSatuan");

module.exports = function(app) {
    app.use("/purchasing", router);
};

router.route("/konversisatuan")
    .get(function(req, res, next) {
        konversiSatuan.find(function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .post(function(req, res, next) {
        konversiSatuan.create(req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });

router.route("/konversiSatuan/:id1/:id2")
    .get(function(req, res, next) {
        konversiSatuan.findOne({
            "satuanGudang": req.params.id1,
            "satuanKonversi": req.params.id2
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .put(function(req, res, next) {
        konversiSatuan.findOneAndUpdate({
            "satuanGudang": req.params.id1,
            "satuanKonversi": req.params.id2
        }, req.body, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    })
    .delete(function(req, res, next) {
        konversiSatuan.findOneAndRemove({
            "satuanGudang": req.params.id1,
            "satuanKonversi": req.params.id2
        }, function(err, result) {
            if (err)
                return next(err);
            else
                res.json(result);
        });
    });