const errorHandler = (err, req, res, next) => {
    console.error(`Error: ${err.message}`);

    // Send error response
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorHandler;