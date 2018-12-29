const express = require('express');
const enrouten = require('express-enrouten');

const app = express();

app.use(enrouten({ directory: 'controllers' }));

module.exports = app;
