const EMAIL = 'user@zoominfo.com';
const PASSWORD = 'zoominfo';
const TOKEN = 'magic-token';

function canLogin() {
}

module.exports = function login(req, res) {
    res.send({ token: canLogin(req.body) ? TOKEN : null });
}
