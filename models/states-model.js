const Mongoose= require('mongoose');
const Schema=Mongoose.Schema;

const State= new Schema({
    id:String,
    name:String,
    cities: Array,
    extra:{
        capital: String,
        airport: String
    }
});

module.exports= Mongoose.model('States',State);

// const states = [
// {id: 0,name: "Israel",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 1,name: "Usa",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 2,name: "french",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 3,name: "England",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 4,name: "Etiopia",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 5,name: "china",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 6,name: "Thailand",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 7,name: "HongKong",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 8,name: "Japan",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}},
// {id: 9,name: "Rusia",cities: ["netanya", "lod", "yokneam"],extra:{capital: "jerosalem", airport: "ben-goriuon"}}
    
// ];

// module.exports= states;