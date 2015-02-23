// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = require('./supplier');
var barangSchema = require('./barang');

var pesananBarangSchema = new Schema({
    nomor: String,
    tanggal: String,
    supplier: supplierSchema,
    ppn: Boolean,
    spItemsList: [{
        qty: Number,
        diskon: Number,
        harga: Number,
        kurs: Number,
        valuta: String,
        valutaBayar: String,
        spp: String,
        barang: barangSchema
    }]
});

pesananBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('pesananBarang', pesananBarangSchema);