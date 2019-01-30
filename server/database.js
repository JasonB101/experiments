const uuid = require('uuid')
const Transformer = function (bot) {
    this._id = uuid()
    this.name = bot.name
    this.affiliation = bot.affiliation
    this.vehicle = bot.vehicle
}

const Database = function () {
    this.transformers = []
}

Database.prototype.find = function() {
    return this.transformers
}

Database.prototype.save = function(bot){
    const newBot = new Transformer(bot)
    this.transformers.push(newBot)
    return newBot
}

Database.prototype.findByIdAndRemove = function (id) {
    const foundBot = this.transformers.find(bot => {
        return bot._id === id
    })
   if (foundBot === undefined) return
   const index = this.transformers.indexOf(foundBot)
   this.transformers.splice(index, 1)
}

Database.prototype.findById = function (id) {
    const foundBot = this.transformers.find(bot => {
        return bot._id === id
    })
    return foundBot
}

Database.prototype.findByIdAndUpdate = function (id, updates){
    const foundBot = this.transformers.find(bot => {
        return bot._id === id
    })

    if (foundBot === undefined) return
    const index = this.transformers.indexOf(foundBot)
    const newBot = { ...foundBot, ...updates }
    this.transformers.splice(index, 1, newBot)
    return newBot
}

module.exports = new Database()