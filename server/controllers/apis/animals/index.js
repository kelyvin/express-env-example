'use strict';

const
    express = require('express'),
    dogController = require('../dogs');

let router = express.Router();

router.use('/dogs', dogController);

module.exports = router;