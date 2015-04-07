// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var departemenSchema = new Schema({
    departemen: String,
    kode: String
});

departemenSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('departemen', departemenSchema);