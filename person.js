"use strict"
const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const PersonSchema = new Schema ({
    name       : String,
    age        : String
})

let models = {
    Person : mongoose.model('Person', PersonSchema)
}

// use clearDB for testing purpose only
async function clearDB() {
    for(let modelName in models) {
        console.log("Clearing", modelName)
        await models[modelName].deleteMany({})
    }
}

module.exports = {
    ...models,
    clearDB: clearDB
}