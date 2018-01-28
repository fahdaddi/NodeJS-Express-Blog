const express = require('express');

const Category = require('../models/category');

const route = express.Router();

route.get('/categories',(req,res,next)=>{
  Category.getCategories((err,categories)=>{
    if(err){
      res.send(err);
    }
    res.render('manage_categories',{
      title:"Manage Categories",
      categories:categories
    });
  });
});


route.get('/categories/add',(req,res,next)=>{
  res.render('add_category',{
    title:"Add Category"
  });
});


route.get('/articles',(req,res,next)=>{
  res.render('manage_articles',{
    title:"Manage Articles"
  });
});


route.get('/categories/edit/:cat_id',(req,res,next)=>{
  Category.getCategoryById(req.params.cat_id,(err,category)=>{
    if(err){
      res.send(err)
    }
    res.render('edit_category',{
      title : "Edit Category",
      category : category
    });
  });
});


route.get('/categories/dupledit/:cat_id',(req,res,next)=>{
  Category.getCategoryById(req.params.cat_id,(err,category)=>{
    if(err){
      
    }
    let duplicateCategory = {
      title : category.title,
      description : category.description
    };
    Category.addCategory(duplicateCategory,(err,category)=>{
      if(err){

      }
      res.redirect('/manage/categories/edit/'+category._id);
    })
  });
});

route.delete('/categories/delete/:cat_id',(req,res,next)=>{
  let query = { _id : req.params.cat_id };
  Category.deleteCategory(query,(err,category)=>{
    if(err){
      res.send(err);
    }
    res.redirect("/manage/categories");
  })
});

module.exports = route ;