const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: Number,
    username: String,
    password: String,
    email: String,
    phoneNumber: String,
    skills: [String],
    educationHistory: [
        {
            school: String,
            degreeType: String,
            startDate: Date,
            endDate: Date
        }
    ],
    workHistory: [
        {
            employer: String,
            jobTitle: String,
            startDate: Date,
            endDate: Date,
            description: String
        }
    ]
})

const jobListSchema = new Schema({
    jobId: Number,
    employer: String,
    datePosted: Date,
    jobTitle: String,
    payRange: {
        lowEnd: Number,
        highEnd: Number
    },
    location: [String],
    fullTime: Boolean,
    description: String,
    requirements: [String]

})

const employerSchema = new Schema({
    employerId: Number,
    username: String,
    password: String,
    email: String,
    jobs: [Number]

})