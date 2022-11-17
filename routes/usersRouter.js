const userRouter= require('express').Router();
const {postUser, Getusers, Postlogin}= require('../controllers/userscontorl');

userRouter.post('/signup',postUser);
userRouter.get('/', Getusers);
userRouter.post('/login', Postlogin);


module.exports= userRouter;