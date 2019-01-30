const express = require('express')
const User = require("../models/user")
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

//SignUp / post new user

authRouter.post("/signup", (req, res, next) => {
    //Search for existing user, if it does not exist, create it.
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) return res.status(500).send({success: false, err})
        console.log(req.body)
        //If no user is found "findOne" will return "null"
        if (existingUser !== null) return res.status(400).send({success: false, err: "That username already exists"})

        //If we've made it this far, create the user

        const newUser = new User(req.body)
        newUser.save((err, user) => {
         
            if (err) return res.status(500).send({success: false, err})
        
            //After saving the new user, lets give them a token to log them in now.
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success: true, user: user.toObject(), token})
            
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    //Find user and check for correct info
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) res.status(500).send({success: false, err})
        //If the user does not exist OR the password is incorrect, send error message.
        if (!user || user.password !== req.body.password) {
            res.status(403).send({success: false, err: "The information you provided is incorrect"})
        }

            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.send({token: token, success: true, user: user.toObject()})
    })
})


module.exports = authRouter