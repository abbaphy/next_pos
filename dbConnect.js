const mongoose = require('mongoose')

const URL = 'mongodb+srv://Maryam2023:Maryam2023@cluster0.sbociwr.mongodb.net/'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})