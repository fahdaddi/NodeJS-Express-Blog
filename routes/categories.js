const express = require('express');

const Category = require('../models/category');

const route = express.Router();
//Show all the Categories to the Client
route.get('/',(req,res,next)=>{
  Category.getCategories((err,categories)=>{
    if(err){
      res.send(err);
    }
    res.render('categories',{
      title:"Categories",
      categories:categories
    });
  });
});

//Add a category
route.post('/add',(req,res,next)=>{
  let newCategory = new Category();
  newCategory.title = req.body.title;
  newCategory.description = req.body.description;
  Category.addCategory(newCategory,(err,category)=>{
    if(err){
      res.send(err);
    }
    res.redirect('/manage/categories');
  });
});

//Edit a category
route.post('/edit/:cat_id',(req,res,next)=>{
  let category = new Category();
  const updatedCategory = {
    title : req.body.title,
    description : req.body.description,
  }
  const query = { "_id" : req.params.cat_id };
  Category.setCategory(query,updatedCategory,{},(err,category)=>{
    if(err){
      res.send(err);
    }
    res.redirect('/manage/categories');
  });
});
module.exports = route ;
