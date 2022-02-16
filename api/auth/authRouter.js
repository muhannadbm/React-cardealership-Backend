const bcrypt = require('bcryptjs/dist/bcrypt')
const authRouter = require('express').Router()
const User = require('../users/usersModel')
const token_builder = require('./token-builder')

authRouter.get('/users',async(req,res,next) => {
    let users = await User.getAllUsers();
    res.status(200).json(users)
})

authRouter.post('/login', async(req,res,next) => {
    console.log('inside login route')
    let user = await User.getByUsername(req.body.username)
    console.log(user)
    if(user && bcrypt.compareSync(req.body.password, user.password)){
        const token = token_builder(user)
        res.status(200).json({
            message: `Welcome ${user.username}`,
            token: token
        })
    }
    else{
        next({status: 401, message:"Invalid username or password !"})
    }

})
module.exports = authRouter