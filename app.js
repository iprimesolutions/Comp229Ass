var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  //  await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // await mongoose.connect('mongodb://localhost:27017/Marketplace')
   

   await mongoose.connect('mongodb+srv://comdayo:4IHostDomain@cluster0.ez0ujvm.mongodb.net/Marketplace?retryWrites=true&w=majority');
  //  await mongoose.connect("mongodb+srv://cluster0.ez0ujvm.mongodb.net/Marketplace")
}

var indexRouter = require('./routes/index');
var productRouter = require('./routes/productRoutes');
var apiRouter = require('./routes/api')

var app = express();
// const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// Mount your routes
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/api', apiRouter);
// app.use('/api/categories', categoryRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use('/api', function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// const express = require('express');
// const mongoose = require('mongoose');
// const { check, validationResult } = require('express-validator');

// const app = express();
// const PORT = process.env.PORT || 3000;

// Middleware
// app.use(express.json());

// Database connection
// const connectionString = 'YOUR_MONGODB_CONNECTION_STRING_HERE';
// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
