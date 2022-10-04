const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: Number,
    username: String,
    password: String,
    email: String,
    phoneNumber: String,
    skills: [String],
})

const jobListSchema = new Schema({
    jobId: Number,
    employer: String,
    jobTitle: String,
    description: String,
    requirements: [String]

})

const employerSchema = new Schema({
    employerId: Number,
    username: String,
    password: String,
    email: String,
    

})