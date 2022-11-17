
const matchingPasswords= (password, passwordconfirm)=>{
    if (password== passwordconfirm){
        return true
    }else{
        return false
    }
};

const confirmEmail= (email)=>{
    const at= email.indexOf('@');
    const ending= email.slice(email.length-4)
    if(at >-1 && ending =='.com'){
        return true
    }else{
        return false
    }
};

const ageLimit= (date)=>{
    const year= date.slice(date.length-4)
    const age= 2022-year;
    if (age> 18){
        return true
    }else{
        return false
    }
};


const chackuseremail=(bodyemail, usersarray)=>{
    const emailinData= usersarray.find(item=>item.email == bodyemail.email);
    const passwordinData= usersarray.find(item=>item.password == bodyemail.password)
    if (emailinData && passwordinData){
        return true
    }
    else{
        return false
    }
};




module.exports= {matchingPasswords, confirmEmail, ageLimit, chackuseremail};