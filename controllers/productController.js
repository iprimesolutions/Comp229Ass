// let UserModel = require('../models/user.model');

// module.exports.save = async (req, res) => {
//     const user = new UserModel(req.body);
//     let result = await user.save();
//     res.json(result)
// }

// module.exports.find = async (req, res) => {
//     let result = await UserModel.find(req.params)
//     res.json(result)
// }
 var Products = require('../models/Product');

// Create a new product
module.exports.createProduct = async (req, res) => {
    const product = new Products(req.body);
    let result = await product.save();
    res.json(result);
 }

// Retrieve all products
exports.getAllProducts = async (req, res) => {
    let prod = await Products.find();
    res.json(prod);
  
}
// Retrieve a product by ID
module.exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    let product = await Products.findById(productId);
    res.json(product);
  }

// Update a product by ID
module.exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    const updates = req.body;
    const options = { new: true }; // Return the updated product
    let updatedProduct = await Products.findByIdAndUpdate(productId, updates, options);
    res.json(updatedProduct);
  
}
// Delete all products
module.exports.deleteAllProducts = async (req, res) => {
    let delAll = await Products.deleteMany({}); // This will delete all products in the "products" collection
    res.json(delAll); 
 
}

// Delete a product by ID
module.exports.deleteProduct = async (req, res) => {
      const productId = req.params.id;
    let delProduct = await Products.findByIdAndDelete(productId);
    res.json(delProduct)
  
}