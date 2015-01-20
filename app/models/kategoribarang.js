// Example model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var kategoriBarangSchema = new Schema({
	kode: String,
	kategori: String
});

kategoriBarangSchema.virtual('date')
.get(function(){
	return this._id.getTimestamp();
});

mongoose.model('kategoriBarang', kategoriBarangSchema);
