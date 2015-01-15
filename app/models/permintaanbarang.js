// Example model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var departemenSchema = require('./departemen');
var barangSchema = require('./barang');

var permintaanBarangSchema = new Schema({
	noSpp: String,
	tglPermintaan: Date,
	departemen: departemenSchema,
	jenis: Boolean,
	periode: String,
	lineItemsSppList: [{
		barang: barangSchema,
		tglButuh : Date,
		jumlah: Number
	}]
});

permintaanBarangSchema.virtual('date')
.get(function(){
	return this._id.getTimestamp();
});

mongoose.model('permintaanBarang', permintaanBarangSchema);
