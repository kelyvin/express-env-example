'use strict';

const
    dogs = [{
        id: 1,
        name: 'Corgi',
        origin: 'Wales',
        breeds: [
            'Pembroke',
            'Cardigan'
        ]
    }, {
        id: 2,
        name: 'Husky',
        breeds: [
            'Alaskan',
            'Siberian',
            'Labrador',
            'Sakhalin'
        ]
    }];


function getDogs(req, res) {
    res.json(dogs);
}

function getDogWithId(req, res) {
    let id = req.params.id || 0,
        result = {};

     for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].id == id) {
            result = dogs[i];
            break;
        }
     }

     res.json(result);
}

module.exports = {
    getDogs: getDogs,
    getDogWithId: getDogWithId
};
