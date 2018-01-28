const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  title: {
    type:String
  },
  description: {
    type:String
  }
});

const Category = module.exports = mongoose.model('Category',categorySchema);
//Get All the categories
module.exports.getCategories = function(callback,limit) {
  Category.find(callback).limit(limit).sort([['title','ascending']]);
}

//Creat a new category
module.exports.addCategory = function(category,callback){
  Category.create(category , callback);
  console.log("New category Added: "+category.title);
}

module.exports.getCategoryById = function(id,callback) {
  Category.findById(id,callback);
}

module.exports.setCategory = function(query,category,options,callback){
  Category.findOneAndUpdate(query,category,options,callback);
}

module.exports.deleteCategory = function(query,callback){
  console.log('removing category');
  Category.remove(query,callback);
}
