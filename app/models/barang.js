// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var kategoriBarangSchema = require('./kategoribarang');
var satuanGudangSchema = require('./satuangudang');

var barangSchema = new Schema({
    kode: String,
    kategori: String,
    nama: String,
    alias: String,
    satuan: String,
    spesifikasi: String,
    deskripsi: String
});

barangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('barang', barangSchema);