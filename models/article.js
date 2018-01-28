const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title:{
    type:String,
    required : true
  },
  subtitle:{
    type : String,
  },
  author:{
    type : String,
    required : true
  },
  article_body:{
    type : String
  },
  date:{
    type  : Date
  },
  comments:[{
    user : String,
    text : String,
    date : String
  }]
});

const Article = module.exports = mongoose.model('Article',articleSchema);


module.exports.addArticle = function(article,callback){
  Article.create(article,callback);
}

module.exports.getArticles = function(callback,limit){
  Article.find(callback).limit(limit).sort([['date','descending']]);
}

module.exports.getArticleById = function(query,callback){
  Article.findById(query,callback);
}

module.exports.setArticle = function(query,article,options,callback){
  Article.findOneAndUpdate(query,article,options,callback);
}

module.exports.removeArticleById = function(query,callback){
  Article.remove(query,callback);
}
