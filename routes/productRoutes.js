var express = require('express');
var router = express.Router();
// const express = require('express');
// const router = express.Router();
var productController = require('../controllers/productController');

// Create a new product
 router.post('/', productController.createProduct);
// Update products
router.put('/', productController.updateProduct);

// Retrieve all products
router.get('/', productController.getAllProducts);
// Retrieve all product by _id
router.get('/:_id', productController.getProductById);
// Delete product by _id
router.delete('/:_id', productController.deleteProduct);
// Delete all products
router.delete('/', productController.deleteAllProducts);



// Implement other routes (update, delete, get by id) similarly.

module.exports = router;



