// const dburl= process.env.DB_CLOUD
const mongoose= require('mongoose');

///conecting
mongoose.connect(process.env.REACT_APP_DB_LOCAL_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('db conected');
})
.catch((err)=>{
    console.log(err.massage);
});
//obj after connection
const db= mongoose.connection;
///exporting the connection
module.exports= db;



