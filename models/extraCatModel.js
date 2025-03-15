const { default: mongoose, Types } = require("mongoose");

const extraCatSchema=mongoose.Schema({
    name: String,
    image: String,
    subCatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subCat'
    }
})
const ExtraCat=mongoose.model('extraCat',extraCatSchema);

module.exports = ExtraCat;