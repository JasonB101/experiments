const express = require('express')
const User = require("../models/user")
const userRouter = express.Router()
const jwt = require('jsonwebtoken')

//Temporary Delete function
userRouter.delete("/:id", (req, res, next) => {
    if (req.user.isAdmin) {
        User.deleteOne({ username: req.params.user.toLowerCase() }, (err, user) => {
            if (err) res.status(500).send({ success: false, err })
            return res.send({ success: true, message: `${req.params.user.toLowerCase()} has been removed successfully.` })

        })
    } else {
        res.status(500).send({ success: false, message: "Permission denied, you are not an admin." })
    }
})

//Temporary DeleteAll function

userRouter.delete("/", (req, res, next) => {
    if (req.user.isAdmin) {
        User.deleteMany({isAdmin: false}, (err) => {
            if (err) res.status(500).send({ success: false, err })
            return res.send({ success: true, message: `All users have been removed successfully.` })
        })
    } else {
        res.status(500).send({ success: false, message: "Permission denied, you are not an admin." })
    }
})

module.exports = userRouter