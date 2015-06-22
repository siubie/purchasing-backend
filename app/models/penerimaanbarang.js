var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = require('./supplier');
var barangSchema = require('./barang');

var penerimaanBarangSchema = new Schema({
    diskon: Number,
    kategori: String,
    kurs: Number,
    nomor: String,
    nomorSj: String,
    sp: String,
    status: String,
    supplier: supplierSchema,
    tanggalBuat: String,
    tanggalDatang: String,
    valuta: String,
    lpbItemsList: [{
        barang: barangSchema,
        harga: Number,
        jumlahDatang: Number,
        jumlahPesan: Number,
        satuan: String,
        spp: String,
        status: String
    }]
});

penerimaanBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('penerimaanBarang', penerimaanBarangSchema);