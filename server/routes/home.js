'use strict';

const
    express = require('express'),
    homeController = require('../controllers/home');

let router = express.Router();

router.get('/', homeController.index);
router.get('/info', homeController.info);

module.exports = router;