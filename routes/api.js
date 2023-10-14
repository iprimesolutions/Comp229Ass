var express = require('express');
var router = express.Router();


var productRouter = require('./productRoutes');
router.use('/productRoutes', productRouter);

module.exports = router;