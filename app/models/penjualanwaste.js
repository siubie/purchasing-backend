var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var wasteSchema = require('./waste');

var penjualanWasteSchema = new Schema({
    alamat: String,
    nama: String,
    nomor: String,
    tanggal: String,
    wasteItemsList: [{
        harga: Number,
        jumlah: Number,
        waste: wasteSchema
    }]
});

penjualanWasteSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('penjualanWaste', penjualanWasteSchema);