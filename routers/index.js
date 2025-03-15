const { Router } = require("express");
const catRouter = require("./categoryRouter");
const subCatRouter = require("./subCatRouter");
const extraCatRouter = require("./extraCatRouter");
const productRouter = require("./productRouter");
const router= Router();

router.use('/',catRouter);
router.use('/subCat',subCatRouter);
router.use('/extraCat',extraCatRouter);
router.use('/product',productRouter)

module.exports = router;