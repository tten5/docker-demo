const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const model = require ('./person.js')

// useful variables
const app = express() 
const Person = model.Person
const port = process.env.PORT || 8080

// use body-parsers
app.use(express.json())

// connect to mongodb
const dbUrl = process.env.MONGO_URL || "mongodb://localhost:27017/setGetServer"

mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

// views setup
app.set('views', path.join(__dirname, 'frontend'))
app.set('view engine', 'ejs');

//CRUD 
app.get('/:name', async(req, res) => {
    const person = await Person.findOne({name: req.params.name})
    if(!person) {
        // cases where client access to the id that once has been there but now deleted
        return res.status(400).json({
            message: "Person not found"
        }) // return so that it wont go to render step
    }

    return res.json({
        message: "successfully get person",
        name: person.name,
        age: person.age
    })
}) 

// form to register the person
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', async(req, res) => {
    const person = new Person(req.body)
    await person.save()
    return res.json({
        status: "ok",
        message: "successfully record Person information"
    })
}) 

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
}) 