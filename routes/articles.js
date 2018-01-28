const express = require('express');
const Article = require('../models/article');
const route = express.Router();

route.get('/',(req,res,next)=>{
  Article.getArticles((err,articles)=>{
    if(err) res.send(err);
    res.render("articles",{
      title:"Articles",
      articles : articles
    });
  });
});

//add article post form
route.post('/add',(req,res,next)=>{
  const article = new Article();
  article.title = req.body.title;
  article.subtitle = req.body.subtitle;
  article.author = req.body.author;
  article.article_body = req.body.article_body;
  article.comments = [];
  Article.addArticle(article,(err,article)=>{
    if(err){
      res.send(err);
    }
    console.log('new article added with from: '+ article.author);
    res.redirect('/manage/articles');
  });
});

//edit article post form
route.post('/edit/:article_id',(req,res,next)=>{
  let article = new Article();
  const query ={'_id' : req.params.article_id};
  const updatedarticle = {
    title : req.body.title,
    subtitle : req.body.subtitle,
    author : req.body.author,
    article_body : req.body.article_body
  }
  Article.setArticle(query,updatedarticle,{},(err,article)=>{
    if(err){
      res.send(err);
    }
    res.redirect('/manage/articles');
  });
});

route.get('/article/:article_id',(req,res,next)=>{
  let article = new Article();
  const query = {"_id": req.params.article_id};
  Article.getArticleById(query,(err,article)=>{
    if(err) res.send(err);
    res.render('article',{
      article : article
    });
  });
});

module.exports = route ;
