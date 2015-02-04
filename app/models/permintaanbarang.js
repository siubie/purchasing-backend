// Example model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var departemenSchema = require('./departemen');
var barangSchema = require('./barang');

var permintaanBarangSchema = new Schema({
	nomor: String,
	tanggal: String,
	departemen: departemenSchema,
	jenis: Boolean,
	periode: String,
	status: String,
	sppItemsList: [{
		barang: barangSchema,
		tanggalButuh : String,
		jumlah: Number,
		keterangan: String,
		sisa: Number,
		status: Boolean
	}]
});

permintaanBarangSchema.virtual('date')
.get(function(){
	return this._id.getTimestamp();
});

mongoose.model('permintaanBarang', permintaanBarangSchema);
