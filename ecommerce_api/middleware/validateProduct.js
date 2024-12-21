const validateProduct = (req, res, next) => {
    const { name, price, description, image } = req.body;

    if (!name || !price || !description || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ message: 'Price must be a positive number' });
    }

    next();
};

module.exports = validateProduct;