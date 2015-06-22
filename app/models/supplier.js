var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supplierSchema = new Schema({
    alamat: String,
    kode: String,
    nama: String,
    nomorTelepon: String,
    kategori: [String]
});

supplierSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('supplier', supplierSchema);