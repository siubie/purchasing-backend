// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = require('./supplier');
var barangSchema = require('./barang');

var penerimaanBarangSchema = new Schema({
    nomor: String,
    tanggalDibuat: String,
    tanggalDatang: String,
    sp: String,
    supplier: supplierSchema,
    lpbItemsList: [{
        spp: String,
        barang: barangSchema,
        qty: Number
    }]
});

penerimaanBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('penerimaanBarang', penerimaanBarangSchema);