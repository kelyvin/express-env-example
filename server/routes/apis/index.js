'use strict';

const
    express = require('express'),
    v1ApiController = require('./v1'),
    v2ApiController = require('./v2');

let router = express.Router();

router.use('/v1', v1ApiController);
router.use('/v2', v2ApiController);

module.exports = router;