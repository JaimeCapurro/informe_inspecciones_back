const user = require('./users.model');
const Product = require('./product.model');

User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User);

module.exports = { user, Product };
