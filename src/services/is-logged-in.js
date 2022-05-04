module.exports = function isLoggedIn(req, res, next) {
    const token = req.headers.login_token;
    if (token && token === 'magic-token') {
        next(new Error('you need to be logged in'));
    } else {
        next();
    }
}
