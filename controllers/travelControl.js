const stateModel= require('../models/states-model');


const GetStates= async (req,res) => {
    await stateModel.find({})
        .then((results,err)=>{
        if (err){
            return res.status(400).json({success:false, massage:err})
        }
        if(results.length==0){
            return res.json({success: false, massage:"no states to show"})
        }
        res.status(200).json({success:true, data: results});
    });
 
};

const GetStatesById= async (req,res) => {
    await stateModel.findById(req.params.id)
    .then((data)=>{
        if(!data){
            return res.json({success:false, massage:'state dont avilable' })
        }
        res.status(200).json({success:true, data:data})
    })
    .catch(err=> res.status(400).json({success:false, massage:err}))
    
};

const PostStates= async (req,res) => {
    await stateModel.insertMany(req.body.newState)
    .then(()=>{
        return res.status(200).json({success:true, massage: "add"})
    })
    .catch(err=>res.status(400).json({success:false, err}))
};


const PutStates= async (req,res) => {
    await stateModel.findByIdAndUpdate(req.params.id, req.body)
    .then((result) =>{
        return res.status(200).json({success:true, result})
    })
    .catch(err=>res.status(400).json({success:false, err}))

 
};

const DeleteStates= async(req,res) => {
    await stateModel.findByIdAndDelete(req.params.id)
    .then(()=>{
        return res.status(200).json({success:true})
    })
    .catch(err=>res.status(400).json({success:false, err}))
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