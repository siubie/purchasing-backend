var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var barangSchema = new Schema({
    deskripsi: String,
    kategori: String,
    jenis: String,
    kode: String,
    nama: String,
    satuan: String,
    spesifikasi: String
});

barangSchema.virtual("date")
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model("barang", barangSchema);