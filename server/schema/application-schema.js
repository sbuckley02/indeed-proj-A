const mongoose = require("mongoose")

const Schema = mongoose.Schema

const applicationSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    organization: String,
    title: String,
    description: String,
    applicants: [               //not sure if this should be in its own table or not
        {
            applicantId: Number,
            answers: [
                {
                    question: String,
                    answerField: Mixed
                }
            ]
        },
    ],
    questions: [
        {
            question: String,
            answerField: Mixed  //might switch this to "answerType: String"
        }
    ],
    datePosted: {
        type: Date,
        default: Date.now
    }
})

const applicationModel = mongoose.model("application", applicationSchema)

module.exports = applicationModel