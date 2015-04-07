// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var departemenSchema = require('./departemen');
var barangSchema = require('./barang');

var permintaanBarangSchema = new Schema({
    departemen: departemenSchema,
    jenis: Boolean,
    nomor: String,
    periode: String,
    status: String,
    tanggal: String,
    sppItemsList: [{
        barang: barangSchema,
        harga: Number,
        jumlah: Number,
        keterangan: String,
        leadTIme: Number,
        sisa: Number,
        status: String,
        tanggalButuh: String
    }]
});

permintaanBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('permintaanBarang', permintaanBarangSchema);