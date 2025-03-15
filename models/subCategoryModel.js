const { default: mongoose, Types } = require("mongoose");

const subCatSchema=new mongoose.Schema({
    name: String,
    image: String,
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    }
})
const subCategory=mongoose.model('subCat',subCatSchema);

module.exports = subCategory;