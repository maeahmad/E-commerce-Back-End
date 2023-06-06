const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//locahost:3001/api/categories
router.use('/categories', categoryRoutes);
///products
router.use('/products', productRoutes);
//tags
router.use('/tags', tagRoutes);

module.exports = router;
