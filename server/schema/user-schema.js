const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//used to connect, maybe use later
/* 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    
    if (err) throw err;
    console.log('Successfully connected');

} ); 
*/

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {                             //considering just having this be a simple String 
            firstname: {                    
                type: String,
                required: true
            }, 
            lastName: {
                type: String,
                required: true
            }, 
        },
    contactInfo: {    
        gtEmail: String,
        personalEmail: String,          //considering removing
        phoneNumber: String
    },
    hashedPassword: Number,
    resume: Buffer,                     //is this necessary with the gt idea?
    created: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model("user", userSchema)

module.exports = userModel