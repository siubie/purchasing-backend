var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var departemenSchema = require('./departemen');
var barangSchema = require('./barang');

var permintaanBarangSchema = new Schema({
    emergency: Boolean,
    kategori: String,
    nomor: String,
    status: String,
    tanggal: String,
    sppItemsList: [{
        barang: barangSchema,
        hargaKatalog: Number,
        jumlah: Number,
        keterangan: String,
        leadTime: Number,
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