const airlines= require('../models/Airlines-model');

const GetAirlines= (req,res)=>{
    res.send({massage: "success",airlines})
};

const GetAirlinesById=(req,res) => {
    const stateId= airlines.find(ste=> ste.id == req.params.id);
    stateId ? res.send({stateId}): res.send('states id dosnt exsist in data')
};

const GetAirlinesByCountry=(req,res) => {
    const stateId= airlines.find(ste=> ste.country == req.params.country);
    stateId ? res.send({stateId}): res.send('states id dosnt exsist in data')
};

const GetAirlinesByName=(req,res) => {
    const stateId= airlines.find(ste=> ste.name == req.params.name);
    stateId ? res.send({stateId}): res.send('states id dosnt exsist in data')
};

const PostAirlines= (req,res)=>{
    airlines.push(req.body.new)
    res.send({massage: "added", airlines});
};

const PutAirlines = (req,res) => {
    const stateId= airlines.find(ste=> ste.id == req.params.id);
    stateId? (Object.assign(stateId, req.body.new), res.send({massage: "updated",airlines})): res.send("not exist")
    
};
const DeleteAirlines= (req,res) => {
    startIndex= findIndexOfObject(statemodel, req);
    if(startIndex> -1){
        statemodel.splice(startIndex,1);
        res.send({massage: "deleted", airlines})
    }else{
        res.send('id not exsist in data')
    }
};



function findIndexOfObject(array, req){
    const foundObject= array.find( obj => obj.id == req.params.id)
    const startIndex= array.indexOf(foundObject);
    return startIndex
}


module.exports= {
    GetAirlines,
    GetAirlinesById,
    PostAirlines,
    PutAirlines,
    DeleteAirlines,
    GetAirlinesByCountry,
    GetAirlinesByName
};