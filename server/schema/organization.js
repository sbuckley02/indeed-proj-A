const mongoose = require("mongoose")

const Schema = mongoose.Schema

const organizationSchema = new Schema({
    username: String,
    password: String,
    email: String,
    applicationIds: [Number]

})