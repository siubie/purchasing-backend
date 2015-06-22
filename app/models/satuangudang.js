var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var satuanGudangSchema = new Schema({
    satuan: String
});

satuanGudangSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('satuanGudang', satuanGudangSchema);