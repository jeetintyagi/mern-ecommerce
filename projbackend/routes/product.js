const express = require("express");
const router = express.Router();

const { isAdmin, isAuthenticated, isSignedIn } = require("../controllers/auth");
const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product");
const { getUserById } = require("../controllers/user");
const { Router } = require("express");

//PARAMS
router.param("userId", getUserById);
router.param("productId", getProductById);

//ROUTES
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);
//READ ROUTES
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//DELETE ROUTES
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

//UPDATE ROUTES
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

//LISTING ROUTES
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);
module.exports = router;
