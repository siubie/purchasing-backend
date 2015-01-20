// Example model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var departemenSchema = new Schema({
	kode: String,
	departemen: String
});

departemenSchema.virtual('date')
.get(function(){
	return this._id.getTimestamp();
});

mongoose.model('departemen', departemenSchema);
