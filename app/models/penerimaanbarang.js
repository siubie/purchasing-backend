// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = require('./supplier');
var barangSchema = require('./barang');

var penerimaanBarangSchema = new Schema({
    diskon: Number,
    kurs: Number,
    nomor: String,
    nomorSj: String,
    sp: String,
    status: String,
    supplier: supplierSchema,
    tanggalBuat: String,
    tanggalDatang: String,
    valuta: String,
    valutaBayar: String,
    lpbItemsList: [{
        barang: barangSchema,
        harga: Number,
        qty: Number,
        spp: String,
        status: String,
    }]
});

penerimaanBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('penerimaanBarang', penerimaanBarangSchema);