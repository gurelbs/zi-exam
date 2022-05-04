const {resolve} = require('path');

function databasePath() {
    return resolve(__dirname, '../../data/data.csv');
}

module.exports = async function database() {
    // implement me
    return [];
}
