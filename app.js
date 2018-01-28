const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash  = require('connect-flash');
const session = require('express-session');
const expressMessages  =require('express-messages');
const expressValidator = require('express-validator');

//MongoDB connection
mongoose.connect('mongodb://localhost/blog_project');
const db = mongoose.connection;

//init port
const port = 3434;

//init app
const app = express();

//Routes declaration
const index = require('./routes/index');
const categories = require('./routes/categories');
const articles = require('./routes/articles');
const manage = require('./routes/manage');

//Body Parser Midlleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set Views Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

//Set public folder
app.use(express.static(path.join(__dirname,'public')));

//Routes redirection
app.use('/',index);
app.use('/categories',categories);
app.use('/articles',articles);
app.use('/manage',manage);

//start Listening
app.listen(port,()=>{
  console.log('Listening at localhost:'+port);
});
