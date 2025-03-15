const { Router } = require("express");
const subCatctl= require("../controllers/subCatController");
const subCatRouter=Router();
const upload = require("../middlewares/imageUploads");

subCatRouter.post('/create',upload,subCatctl.create);
subCatRouter.get('/view',subCatctl.view)
module.exports = subCatRouter;