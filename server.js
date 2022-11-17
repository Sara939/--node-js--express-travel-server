const dotenv= require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors= require('cors');
const port = 8080;
const trvelrouter = require('./routes/travelRouter');
const airlinesRouter = require('./routes/airlinesRouter');
const flightsRouter = require('./routes/flightsRouter');
const userRouter = require('./routes/usersRouter');
const {Postlogin}= require('./controllers/userscontorl');


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

// const trmiddleware= (req,res,next)=>{
//     if (req.method== 'POST'){
//         console.log(' this is travel');
//         return next()
//     }
//     console.log('not post');
//     return next()
// };

const usersMiddleware= (req,res,next)=>{
    if (Postlogin){
        return next();
    }else{
        return res.send("unable to connect")
    }

};

// app.use(newMiddleware);
// app.use(urlMiddleware);

app.use(usersMiddleware);


app.use('/travel' , trvelrouter);
app.use('/airlines', airlinesRouter);
app.use('/flights',flightsRouter);
app.use('/users', userRouter);



app.get('/', (req,res) => {
    res.send('success')
});

app.listen(port, (req,res) => {
    console.log(`server on in port ${port}`);
});
