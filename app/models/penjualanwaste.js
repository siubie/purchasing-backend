// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var penjualanWasteSchema = new Schema({
    nomor: String,
    tanggal: String,
    nama: String,
    alamat: String,
    wasteItemsList: [{
        nama: String,
        satuan: String,
        jumlah: Number,
        harga: Number
    }]
});

penjualanWasteSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('penjualanWaste', penjualanWasteSchema);
