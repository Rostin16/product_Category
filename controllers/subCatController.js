const subCategory=require("../models/subCategoryModel")

module.exports.create = async(req,res)=> {
    try {
        let data=await subCategory.create({...req.body,image:req.file.path});
        console.log("subCategory created!");
        return res.json(data);
    } catch (error) {
        return res.json({message:error.message});
    }
}

module.exports.view=async(req,res)=> {
    try {
        let data=await subCategory.find({}).populate('categoryId');
        return res.json(data);
    } catch (error) {
        return res.json({message:error.message})
        
    }
}