const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");
const validate = require("../middleware/validate");

router.post("/add",validate.product, ProductController.add);

router.get("/showprods", ProductController.showprods);

router.get("/showprod/:id", ProductController.showprod);

router.put("/update/:id", ProductController.update);

router.delete("/delete/:id", ProductController.deleteprod);

module.exports = router;