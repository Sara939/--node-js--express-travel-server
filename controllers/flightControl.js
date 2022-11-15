const flights= require('../models/flight-model');
const fs= require('fs');

const Getflights= (req,res) =>{
    res.send({massage: 'all flights', flights})
};
const Postflights= (req,res)=>{
    flights.push(req.body.new);
    res.send({massage: "add done", flights})
};
const Putflights =(req,res)=>{
    const findId= flights.find(flight => flight.id == req.params.id);
    findId  ? (Object.assign(findId, req.body.update), res.send({massage: "updated", flights})): res.send("id not found")
};
const Deleteflights =(req,res)=>{
    const startIndex= findIndexOfObject(flights,req);
    if(startIndex >-1){
        flights.splice(startIndex,1)
        res.send({massage: 'sucsess', flights})
    } else{
        res.send("unabble to delet")
    }
};
const GetflightsById= (req,res)=>{
    const findId= flights.find(flight=> flight.id == req.params.id);
    findId ? res.send(findId) : res.send('id not found');
};
const GetflightsByNumber= (req,res)=>{
    const findNum= flights.find(flight=> flight.flightnumber == req.params.flightnumber);
    findNum ? res.send(findNum) : res.send('id not found');
};
const GetflightsByClass= (req,res)=>{
    const findclass= flights.filter(flight=> flight.firstclass== true);
    findclass ? res.send({massage:"nice flight", findclass}) : res.send("dont have first class flights");
};
const GetflightsByDeparture= (req,res)=>{
    const finddeparture= flights.filter(flight=> flight.departure == req.params.departure);
    finddeparture ? res.send({massage: `departure in ${req.params.departure}:`, finddeparture}): res.send("dont have flights");
};
const Postwantedflight= (req,res)=>{
    const fromTo= flights.filter(flights=> flights.from  == req.body.from && flights.to == req.body.to); 
    fromTo ? res.send(fromTo) : res.send("no");
}; 

const Postdepartureandhour= (req,res)=>{
    let openflights = flights.filter(seats =>  seats.availableseats > 0)
    const filterdflights= openflights.filter(flight =>flight.from ==req.body.from && flight.departure == req.body.departure);
    filterdflights ? res.send(filterdflights) : res.send("no seats");
       
};

  
function findIndexOfObject(array, req){
    const foundObject= array.find( obj => obj.id == req.params.id)
    const startIndex= array.indexOf(foundObject);
    return startIndex
}


module.exports= {
    Getflights,Postflights, Postflights, Putflights,
    Deleteflights,GetflightsById,GetflightsByNumber,
    GetflightsByClass,GetflightsByDeparture,
    Postwantedflight,Postdepartureandhour
};