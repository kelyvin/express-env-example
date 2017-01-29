'use strict';

const
    express = require('express'),
    animalsController = require('../../../controllers/apis/animals');

let router = express.Router();

router.use('/animals', animalsController);

module.exports = router;