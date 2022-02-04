//Required built-in Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Required custom modules
const indexRouter = require('./src/routes/index');
const signupRouter = require('./src/routes/signup');
const loginRouter = require('./src/routes/login');
const blogRouter = require('./src/routes/blog');
const aboutRouter = require('./src/routes/about')
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
app.use('/api', indexRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/blog', blogRouter);
app.use('/api/about', aboutRouter);

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
