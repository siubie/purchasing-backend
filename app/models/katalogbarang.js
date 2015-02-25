// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var departemenSchema = require('./departemen');
var barangSchema = require('./barang');
var supplierSchema = require('./supplier');

var katalogBarangSchema = new Schema({
    kode: String,
    barang: barangSchema,
    departemen: departemenSchema,
    supplier: supplierSchema,
    leadTime: Number,
    harga: Number
});

katalogBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('katalogBarang', katalogBarangSchema);