const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/login');
const fetch = require('./routes/fetch');
const isLoggedIn = require('./src/services/is-logged-i');

const app = express();
app.use(bodyParser.json());

app.post('/login', login);
app.get('/fetch', isLoggedIn, fetch);

app.listen(3333, '0.0.0.0');
