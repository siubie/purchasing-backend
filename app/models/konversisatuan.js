var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var konversiSatuanSchema = new Schema({
    satuanGudang: String,
    satuanKonversi: String,
    nilai: Number
});

konversiSatuanSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('konversiSatuan', konversiSatuanSchema);