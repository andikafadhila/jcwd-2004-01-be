const express = require("express");
const Router = express.Router();
const {
  inputProductController,
  getCategory,
  getSymptom,
  getType,
  deleteProductController,
  getAllProductController,
  getProductController,
  editProductController,
  getProductTerkaitController,
} = require("../controllers/productController");

const upload = require("../lib/upload");
const { verifyTokenAccess } = require("../lib/verifyToken");
const uploader = upload("/image", "PRODUCTIMAGE").fields([
  { name: "image", maxCount: 3 },
]);

Router.post(
  "/input-product",
  verifyTokenAccess,
  uploader,
  inputProductController
);

Router.get("/get-category", getCategory);
Router.get("/get-symptom", getSymptom);
Router.get("/get-Type", getType);
Router.patch("/delete-product", deleteProductController);
Router.get("/get-all-product", getAllProductController);
Router.get("/get-product", getProductController);
Router.patch(
  "/edit-product",
  verifyTokenAccess,
  uploader,
  editProductController
);
Router.get("/get-product-terkait", getProductTerkaitController);

module.exports = Router;
