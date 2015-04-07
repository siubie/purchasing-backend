// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var barangSchema = require('./barang');
var supplierSchema = require('./supplier');

var katalogBarangSchema = new Schema({
    alias: String,
    barang: barangSchema,
    leadTime: Number,
    supplier: supplierSchema,
    listHarga: [{
        harga: Number,
        tanggal: String,
    }]
});

katalogBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('katalogBarang', katalogBarangSchema);