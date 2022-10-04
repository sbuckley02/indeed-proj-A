const mongoose = require("mongoose")

const Schema = mongoose.Schema

const applicationSchema = new Schema({
    jobId: Number,
    employer: String,
    datePosted: Date,
    title: String,
    description: String,

})
