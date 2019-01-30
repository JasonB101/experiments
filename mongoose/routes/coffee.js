const express = require("express")
const coffeeRouter = express.Router()
const Coffee = require("../models/coffee")

//Handle Endpoints 
coffeeRouter.route("/")
    .get((req, res, next) => {
        //ask database for entire collection
        Coffee.find()
            .then(coffeeCollection => res.status(200).send(coffeeCollection))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .post((req, res, next) => {
        // get the fields from req.body
        const coffeeData = req.body
        const coffeeDoc = new Coffee(coffeeData)

        // Save to database
        coffeeDoc.save()
            .then(savedCoffeeDoc => res.status(201).send(savedCoffeeDoc))
            .catch((err) => {
                res.status(500)
                next(err)
            })
        // send back saved coffee document

    })

coffeeRouter.route("/:id")
    .get((req, res, next) => {
        const id = req.params.id

        Coffee.findById(id)
            .then(foundCoffee => res.status(200).send(foundCoffee)
                .catch(err => {
                    res.status(500)
                    next(err)
                })
            )

    })
    .delete((req, res, next) => {
        const id = req.params.id

        Coffee.findByIdAndDelete(id)
            .then(() => res.status(200).send({
                message: `Entry ${id} was removed.`
            }))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .put((req, res, next) => {
        const id = req.params.id

        Coffee.findByIdAndUpdate(id, req.body, { new: true })
            .then(updatedCoffee => res.status(200).send(updatedCoffee))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })


module.exports = coffeeRouter