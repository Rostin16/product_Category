
const { default: mongoose } = require("mongoose");

const productSchema=new mongoose.Schema({
    name: String,
    image: String,
         categoryId: { type: mongoose.Schema.Types.ObjectId,
         ref: "category" },
         subCatId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "subCat" },
         extraCatId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "extraCat" }
})
const product = mongoose.model('product', productSchema );
module.exports = product;