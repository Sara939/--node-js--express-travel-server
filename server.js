const express = require('express');
const app = express();
const cors= require('cors');
const port = 8080;
const trvelrouter = require('./routes/travelRouter');
const airlinesRouter = require('./routes/airlinesRouter');
const flightsRouter = require('./routes/flightsRouter');

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended:true}));
app.use('/travel', trvelrouter);
app.use('/airlines', airlinesRouter);
app.use('/flights', flightsRouter);


app.get('/', (req,res) => {
    res.send('success')
});

app.listen(port, (req,res) => {
    console.log(`server on in port ${port}`);
});
