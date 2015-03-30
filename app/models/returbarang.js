// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = require('./supplier');
var barangSchema = require('./barang');

var returBarangSchema = new Schema({
    nomor: String,
    tanggalBuat: String,
    tanggalDatang: String,
    lpb: String,
    sp: String,
    supplier: supplierSchema,
    nomorSj: String,
    returItemsList: [{
        barang: barangSchema,
        qtyDatang: Number,
        qtyTerima: Number,
        qtyRetur: Number,
        alasan: String,
        harga: Number
    }]
});

returBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('returBarang', returBarangSchema);