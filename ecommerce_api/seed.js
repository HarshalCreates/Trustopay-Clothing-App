const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config');

connectDB();

const products = [
    { name: 'T-Shirt', price: 20, description: 'Cotton T-shirt', image: 'url1' },
    { name: 'Jeans', price: 40, description: 'Denim Jeans', image: 'url2' },
];

const seedDatabase = async() => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Database seeded');
        mongoose.connection.close();
    } catch (error) {
        console.error('Seeding error:', error);
        mongoose.connection.close();
    }
};

seedDatabase();