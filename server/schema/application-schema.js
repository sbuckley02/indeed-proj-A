const mongoose = require("mongoose")

const Schema = mongoose.Schema

const applicationSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    organization: String,
    title: String,
    description: String,
    applicantIds: [Number],
    questions: [
        {
            question: String,
            answerField: Mixed
        }
    ],
    datePosted: {
        type: Date,
        default: Date.now
    }
})
