const product = require("../models/productModel");


module.exports.create = async(req,res)=>{
    try {
        //  console.log(req.file);
        //  console.log(res.body);
        let data= await product.create({...req.body,image:req.file.path});
        return res.json({data});
        
    } catch (error) {
        return res.json({message: error.message});
    }
}
module.exports.view=async(req,res)=>{
    try {
        let data= await product.find({})
        .populate('categoryId')
        .populate('subCatId')
        .populate('extraCatId');
        return res.json(data);
    } catch (error) {
        return res.json({message:error.message});
    }

};