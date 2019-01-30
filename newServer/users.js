const express = require('express')

const userRouter = express.Router()

userRouter.route('/')
    .get((req, res) => {
        // search all users
    })
    .post((req, res) => {
        // post new user
    })
userRouter.route('/:id')
    .delete((req, res) => {
        // delete user
    })
    .put((req, res) => {
        // update user
    })

module.exports = userRouter