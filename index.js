'use strict';

const
    server = require('./server')(),
    config = require('./configs');

server.create(config);
server.start();