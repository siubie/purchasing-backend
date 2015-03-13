// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var barangSchema = require('./barang');

var katalogBarangSchema = new Schema({
    barang: barangSchema,
    hargaSupplier: [{
        supplier: String,
        tanggal: String,
        alias: String,
        harga: Number,
        leadTime: Number
    }]
});

katalogBarangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('katalogBarang', katalogBarangSchema);