//Required built-in Modules
const createError = require('http-errors');
require('./models/db');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {auth} = require('./middleware/authMiddleware')

//Required custom modules
const authRoutes = require('./routes/authRoutes')
const { dirname } = require('path');

//Initialization express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Morgan treatment
if (app.get('env') === 'development'){
  app.use(logger('dev'));
  console.log('Morgan logger is enabled...')
}

//Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Set static file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Custom Middleware
app.use(authRoutes)

//Routes
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', auth, (req, res) => {
  res.render('about')
})
app.get('/blog', (req, res) => {
  res.render('blog')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(404).json(
    {
      
    }
  );
});
module.exports = app;
