const { Router } = require("express");
const catcontroller=require("../controllers/categoryController");
const upload=require("../middlewares/imageUploads");
const catRouter = Router();


catRouter.post("/create",upload , catcontroller.create);

catRouter.get('/view',catcontroller.view)


module.exports = catRouter;