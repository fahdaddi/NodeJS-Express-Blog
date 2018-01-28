const express = require('express');

const route = express.Router();

route.get('/',(req,res,next)=>{
  res.render("index",{
    title:"index"
  });
});

module.exports = route ;
