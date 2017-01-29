'use strict';

const
    express = require('express'),
    errorController = require('../controllers/error');

let router = express.Router();

router.get('/', errorController.index);

module.exports = router;