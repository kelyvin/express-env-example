'use strict';

const
    express = require('express'),
    dogsController = require('../../../controllers/apis/dogs');

let router = express.Router();

router.use('/dogs', dogsController);

module.exports = router;