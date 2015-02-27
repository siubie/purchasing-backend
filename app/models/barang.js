// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var barangSchema = new Schema({
    kode: String,
    kategori: String,
    nama: String,
    alias: String,
    satuan: String,
    spesifikasi: String,
    deskripsi: String,
    hargaSupplier: [{
        supplier: String,
        tanggal: String,
        alias: String,
        harga: Number,
        leadTime: Number
    }]
});

barangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('barang', barangSchema);