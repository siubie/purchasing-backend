// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = new Schema({
    kode: String,
    nama: String,
    alamat: String,
    nomorTelepon: String
});

supplierSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('supplier', supplierSchema);