// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// not sure about the foriegn keys 
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'tag_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


// associations
// You'll need to execute association methods on your Sequelize models to create the following relationships between them:

// Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

// Category has many Product models.

// Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

// Tag belongs to many Product models.


// Your database should contain the following four models, including the requirements listed for each model:

// Category

// id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
// category_name
// String
// Doesn't allow null values

// Product

// id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
// product_name
// String
// Doesn't allow null values
// price
// Decimal
// Doesn't allow null values
// Validates that the value is a decimal
// stock
// Integer
// Doesn't allow null values
// Set a default value of 10
// Validates that the value is numeric
// category_id
// Integer
// References the category model's id

// Tag

// id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
// tag_name
// String

// ProductTag

// id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
// product_id
// Integer
// References the product model's id
// tag_id
// Integer
// References the tag model's id
// Associations