const express = require('express');
const app = express();
const cors= require('cors');
const port = 8080;
const trvelrouter = require('./routes/travelRouter');
const airlinesRouter = require('./routes/airlinesRouter');
const flightsRouter = require('./routes/flightsRouter');
const users=  require('./models/usersmodel')

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended:true}));


// const newMiddleware= (req,res,next)=>{
//     !req.params ? console.log("have data") : console.log("no data");
//     next()
// };

// const urlMiddleware= (req,res,next)=>{
// switch(req.url){
//     case '/travel':
//         console.log(' this is travel');
//         return next()
//     case '/airlines':
//         console.log(' this is airlines');
//         return next()
//     case '/flights':
//         console.log('this is flights');
//         return next()
//     default:
//         console.log("main");
//         return next()
// }
// };

const trmiddleware= (req,res,next)=>{
    if (req.method== 'POST'){
        console.log(' this is travel');
        return next()
    }
    console.log('not post');
    return next()
};

const usersMiddleware= (req,res,next)=>{
    const finduser= users.find(user=> req.body.email == user.email);
    if (finduser){
        finduser.password == req.body.password ? next() : res.send("password not correct");
        
    }else{
        res.send("you are not signed up user")
    }
};

// app.use(newMiddleware);
// app.use(urlMiddleware);


app.use('/travel', trmiddleware, trvelrouter);
app.use('/airlines', usersMiddleware, airlinesRouter);
app.use('/flights',flightsRouter);


app.get('/', (req,res) => {
    res.send('success')
});

app.listen(port, (req,res) => {
    console.log(`server on in port ${port}`);
});
