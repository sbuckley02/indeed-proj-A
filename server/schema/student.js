const mongoose = require("mongoose")

const Schema = mongoose.Schema

const studentSchema = new Schema({
    username: String,
    password: String,
    email: String,
    phoneNumber: String,
    
})
