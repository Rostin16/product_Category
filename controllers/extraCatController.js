const ExtraCat = require("../models/extraCatModel");


module.exports.create = async(req,res)=>{
    try {
        // console.log(req.file);
        // console.log(res.body);
        let data= await ExtraCat.create({...req.body,image:req.file.path});
        return res.json({data});
        
    } catch (error) {
        return res.json({message: error.message});
    }
}
module.exports.view=async(req,res)=>{
    try {
        let data= await ExtraCat.find({}).populate('subCatId');
        return res.json(data);
    } catch (error) {
        return res.json({message:error.message});
    }

}