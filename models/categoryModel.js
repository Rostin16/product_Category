
const { default: mongoose } = require("mongoose");

const categorySchema=new mongoose.Schema({
    name: String,
    image: String,

})
const category = mongoose.model('category', categorySchema );
module.exports = category;