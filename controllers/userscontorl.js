const users= require('../models/users-model');
const {matchingPasswords, confirmEmail, ageLimit, chackuseremail} = require("../validation/validpassword");


const postUser = (req,res)=>{
    if (matchingPasswords(req.body.user.password,req.body.user.passwordconfirm) && confirmEmail(req.body.user.email)&& ageLimit(req.body.user.date)) {
        const id = Math.random()*10+1;
        const token= Math.random();
        users.push(Object.assign(req.body.user, {id,token}));
        res.send('Your are in data');
        
    }else{
        res.send("not corect chack again")
    }  
};
const Getusers= (req,res)=>{
    res.send({massage: "sucsess", users});
};

const Postlogin=(req,res)=>{

    if(chackuseremail(req.body.user,users)){
        res.send({massage:"user in data", users});
        return true
    }else{
        res.send('user not exist')
    }
};

module.exports={
    postUser,
    Getusers,
    Postlogin
};
