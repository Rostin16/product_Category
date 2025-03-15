const { Router } = require("express");
const productController=require("../controllers/productController");
const upload=require("../middlewares/imageUploads");
const productRouter = Router();


productRouter.post("/create",upload , productController.create);

productRouter.get('/view',productController.view)


module.exports = productRouter;