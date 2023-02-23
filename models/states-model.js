const Mongoose= require('mongoose');
const Schema= Mongoose.Schema;

const State= new Schema({
    name:{type: String, required: true},
    cities:{type:Array, required: true} ,
    extra:{
        capital: {type: String, required: true},
        airport: {type: String, required: true}
    }
},
{
    timestamps:true
});

module.exports= Mongoose.model('States',State);

// const states = [
// {id: 0,name: "Israel",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 1,name: "Usa",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 2,name: "french",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 3,name: "England",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 4,name: "Ethiopia",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 5,name: "china",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 6,name: "Thailand",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 7,name: "HongKong",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 8,name: "Japan",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 9,name: "Rusia",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}}
    
// ];

// module.exports= states;