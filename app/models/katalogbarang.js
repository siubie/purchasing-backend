// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var barangSchema = require('./barang');
var supplierSchema = require('./supplier');

var katalogBarangSchema = new Schema({
    barang: barangSchema,
    supplier: supplierSchema,
    alias: String,
    leadTime: Number,
    hargaSupplier: [{
        tanggal: String,
        harga: Number,
    }]
});

katalogBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('katalogBarang', katalogBarangSchema);