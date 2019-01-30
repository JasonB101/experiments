const express = require('express')
require('dotenv').config()
const database = require('./database')
const app = express()

app.use(express.json())

//Get All
app.get('/transformers', (req, res) => {
    const foundTransformers = database.find()

    res.status(200).send(foundTransformers)
})

app.get('/transformers/:id', (req, res) => {
    const foundTransformers = database.findById(req.params.id)

    res.status(200).send(foundTransformers)
})

//Post 
app.post('/transformers', (req, res) => {
    const newTransformer = req.body
    const savedBot = database.save(newTransformer)
    res.status(201).send(savedBot)
})
//Put
app.put('/transformers/:id', (req, res) => {
    const id = req.params.id
    const updatedBot = database.findByIdAndUpdate(id, req.body)
    res.status(201).send(updatedBot)
})


//Delete
app.delete('/transformers/:id', (req, res) => {
    const id = req.params.id
    database.findByIdAndRemove(id)
    res.status(204).send()
})

app.listen(process.env.PORT, console.log(`Server Listening on PORT ${process.env.PORT}`))