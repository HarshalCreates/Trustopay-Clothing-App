const express = require('express');
const Product = require('../models/Product');
const authenticate = require('../middleware/authenticate');
const validateProduct = require('../middleware/validateProduct');
const router = express.Router();


router.get('/', async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});


router.post('/', authenticate, validateProduct, async(req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error saving product' });
    }
});

module.exports = router;