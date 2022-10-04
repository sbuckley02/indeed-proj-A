var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var organizationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstname: {
            type: String,
            required: true
        }, 
        lastName: {
            type: String,
            required: true
        }, 
    },
    owner: String,
    email: Array,
    numOfEmployees: Number,
    phone: String
});