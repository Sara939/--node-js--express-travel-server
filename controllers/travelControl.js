const stateModel= require('../models/states-model');


const GetStates= (req,res) => {
    stateModel.find()
    res.send({massage: "sucsess", statemodel});
};
const GetStatesById= (req,res) => {
    const stateId= statemodel.find(ste=> ste.id == req.params.id);
    stateId ? res.send({stateId}): res.send('states id dosnt exsist in data')
};
const PostStates= (req,res) => {
    statemodel.push(req.body.newState)
    res.send({massage: "added", statemodel})

    
};
const PutStates= (req,res) => {
    const stateId= statemodel.find(ste=> ste.id == req.params.id);
    stateId? (Object.assign(stateId, req.body.state), res.send({massage: "updated",statemodel})): res.send("not exist")
    
};
const DeleteStates= (req,res) => {
    startIndex= findIndexOfObject(statemodel, req);
    if(startIndex> -1){
        statemodel.splice(startIndex,1);
        res.send({massage: "deleted", statemodel})
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
    GetStates,
    GetStatesById,
    PostStates,
    PutStates,
    DeleteStates
};