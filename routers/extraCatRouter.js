const { Router } = require("express");
const extraCatcontroller=require("../controllers/extraCatController");
const upload=require("../middlewares/imageUploads");
const extraCatRouter = Router();


extraCatRouter.post("/create",upload , extraCatcontroller.create);

extraCatRouter.get('/view',extraCatcontroller.view)


module.exports = extraCatRouter;