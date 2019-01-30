const mongoose = require("mongoose")

const coffeeSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    style: {
        type: String,
        enum: ['Italian', 'French', 'Colombian']
    },
    price: Number,
    decaf: Boolean,
    additives: [{
        kind: String,
        amount: Number
    }]
})

module.exports = mongoose.model("Coffee", coffeeSchema)