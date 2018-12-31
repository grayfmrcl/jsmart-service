const nconf = require('nconf');

nconf.use('../config.json');

module.exports = nconf;
