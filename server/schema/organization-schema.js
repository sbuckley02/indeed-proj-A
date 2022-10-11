var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const organizationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    hashedPassword: Number,
    numOfMembers: Number,
    phoneNumber: String,            //can only see 2FA being the use of this
    applicationIds: [Number]
});