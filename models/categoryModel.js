
const { default: mongoose } = require("mongoose");

const categorySchema=new mongoose.Schema({
    name: String,
    image: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" }
})
const category = mongoose.model('category', categorySchema );
module.exports = category;