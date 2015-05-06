// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = require('./supplier');
var barangSchema = require('./barang');

var pesananBarangSchema = new Schema({
    diskon: Number,
    kurs: Number,
    nomor: String,
    ppn: Boolean,
    status: String,
    supplier: supplierSchema,
    syaratBayar: Number,
    tanggal: String,
    valuta: String,
    valutaBayar: String,
    spItemsList: [{
        barang: barangSchema,
        harga: Number,
        hargaKatalog: Number,
        qty: Number,
        spp: String,
        status: String
    }]
});

pesananBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('pesananBarang', pesananBarangSchema);