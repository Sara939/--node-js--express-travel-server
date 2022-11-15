const flightsRouter = require('express').Router();
const {Getflights, Postflights, Putflights,Deleteflights,
    GetflightsById,GetflightsByNumber,GetflightsByClass,
    GetflightsByDeparture,Postwantedflight,
    Postdepartureandhour} = require('../controllers/flightControl');

flightsRouter.get('/', Getflights);
flightsRouter.post('/create',  Postflights);
flightsRouter.put('/update/:id', Putflights);
flightsRouter.delete('/delete/:id', Deleteflights);
flightsRouter.get('/byid/:id', GetflightsById);
flightsRouter.get('/bynum/:flightnumber',GetflightsByNumber);
flightsRouter.get('/firstclass', GetflightsByClass);
flightsRouter.get('/byhour/:departure',GetflightsByDeparture);
flightsRouter.post('/byfromto', Postwantedflight);
flightsRouter.post('/bydepartureandhour', Postdepartureandhour);



module.exports= flightsRouter;