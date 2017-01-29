'use strict';

function index (req, res) {
    res.render('error/index', {
        title: 'Error'
    });
}

module.exports = {
    index: index
};