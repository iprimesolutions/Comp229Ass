var mongoose = require('mongoose');

// const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
  categories:{
    name: String,
    enum: ["Men", "Women", "Teens"]
  }
});

module.exports = mongoose.model('product', productSchema)


//module.exports = mongoose.model('User', UserSchema)