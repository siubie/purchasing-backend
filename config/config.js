var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'api'
        },
        port: 3000,
        db: 'mongodb://admin:admin@ds031972.mongolab.com:31972/api-development'
    },
    test: {
        root: rootPath,
        app: {
            name: 'api'
        },
        port: 3000,
        db: 'mongodb://localhost/api-test'
    },
    production: {
        root: rootPath,
        app: {
            name: 'api'
        },
        port: 3000,
        db: 'mongodb://localhost/api-production'
    }
};

module.exports = config[env];
