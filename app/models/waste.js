// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var wasteSchema = new Schema({
    kode: String,
    nama: String,
    satuan: String
});

wasteSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('waste', wasteSchema);