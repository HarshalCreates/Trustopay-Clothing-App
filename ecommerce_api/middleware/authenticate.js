function noAuth(req, res, next) {

    next();
}

module.exports = noAuth;