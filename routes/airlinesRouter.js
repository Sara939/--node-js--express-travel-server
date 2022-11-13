const airlinesRouter = require('express').Router();
const {GetAirlines,PostAirlines,PutAirlines, DeleteAirlines,GetAirlinesById,GetAirlinesByCountry,GetAirlinesByName}= require('../controllers/airlinescontrol');

airlinesRouter.get('/', GetAirlines);
airlinesRouter.post('/create', PostAirlines);
airlinesRouter.put('/update/:id',PutAirlines);
airlinesRouter.delete('/delete/:id', DeleteAirlines);
airlinesRouter.get('/byid/:id',GetAirlinesById);
airlinesRouter.get('/bycountry/:country', GetAirlinesByCountry);
airlinesRouter.get('/byname/:name',GetAirlinesByName)


module.exports = airlinesRouter;