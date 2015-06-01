// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = require('./supplier');
var barangSchema = require('./barang');

var returBarangSchema = new Schema({
    diskon: Number,
    kurs: Number,
    lpb: String,
    nomor: String,
    nomorSj: String,
    sp: String,
    status: String,
    supplier: supplierSchema,
    tanggalBuat: String,
    tanggalDatang: String,
    valuta: String,
    valutaBayar: String,
    returItemsList: [{
        alasan: String,
        barang: barangSchema,
        harga: Number,
        jumlahDatang: Number,
        jumlahRetur: Number,
        satuan: String,
        status: String
    }]
});

returBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('returBarang', returBarangSchema);
