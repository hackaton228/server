const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const categoryRouter = require('./categoryRouter');
const subCategoryRouter = require('./subCategoryRouter')

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/sub-cat", subCategoryRouter);

module.exports = router;
