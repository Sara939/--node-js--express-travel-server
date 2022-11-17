const trvelrouter= require('express').Router();
const {
    GetStates,
    GetStatesById,
    PostStates,
    PutStates,
    DeleteStates,
} = require('../controllers/travelControl');

trvelrouter.get('/',GetStates );
trvelrouter.get('/byId/:id',GetStatesById);
trvelrouter.post('/create', PostStates);
trvelrouter.put('/update/:id',PutStates );
trvelrouter.delete('/delete/:id',DeleteStates);

module.exports= trvelrouter;