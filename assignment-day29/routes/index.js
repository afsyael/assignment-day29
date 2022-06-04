const express = require('express');
const productRoute = require('../controller/product.controller');
const productCatRoute = require('../controller/product-cat.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

router.get('/product', productRoute.listProduct);
router.get('/product/:id', productRoute.detailProduct);
router.post('/product', productRoute.insertProduct);
router.put('/product/:id', productRoute.updateProduct);
router.delete('/product/:id', productRoute.deleteProduct);

router.get('/product-cat', productCatRoute.listProductCat);
router.get('/product-cat/:id', productCatRoute.detailProductCat);
router.post('/product-cat', productCatRoute.insertProductCat);
router.put('/product-cat/:id', productCatRoute.updateProductCat);
router.delete('/product-cat/:id', productCatRoute.deleteProductCat);

module.exports = router;