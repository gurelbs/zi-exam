const database = require('../services/database');

module.exports = function fetch(req, res) {
    database().then(data => res.send(data));
}
