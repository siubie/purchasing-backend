// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var wasteSchema = require('./waste');

var penjualanWasteSchema = new Schema({
    nomor: String,
    tanggal: String,
    nama: String,
    alamat: String,
    wasteItemsList: [{
        waste: wasteSchema,
        jumlah: Number,
        harga: Number
    }]
});

penjualanWasteSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('penjualanWaste', penjualanWasteSchema);