const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//used to connect, maybe use later
/* 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    
    if (err) throw err;
    console.log('Successfully connected');

} ); 
*/

var userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    contactInfo: {
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
        gtEmail: String,
        personalEmail: String,
        phoneNumber: String
    },
    location: {
        country: String,
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }, 
        postalCode: String
    },
    resume: Buffer,
    jobPreferences: {
        jobTitle: String,
        jobTypes: {
            fullTime: Boolean,
            partTime: Boolean,
            contract: Boolean,
            temporary: Boolean,
            internship: Boolean
        },
        workSchedule: {
            dayRanges: {
                mondayToFriday: Boolean,
                weekendAvaliability: Boolean,
                weekendsOnly: Boolean,
                noWeekends: Boolean,
                holidays: Boolean
            },
            dayRanges: {
                fourHourShift: Boolean,
                eightHourShift: Boolean,
                tenHourShift: Boolean,
                twelveHourShift: Boolean,
                dayShift: Boolean,
                nightShift: Boolean,
                eveningShift: Boolean,
                noNights: Boolean,
                overnightShift: Boolean,
                afterSchool: Boolean
            },
            other: {
                threeTwelve: Boolean,
                fourTen: Boolean,
                fourTwelve: Boolean,
                fiveEight: Boolean,
                onCall: Boolean,
                selfSchedule: Boolean,
                overtime: Boolean
            },
        },
        pay: {
            minimumBasePay: Number,
            payPeriod: String
        },
        relocation: Boolean        
    },
    readyToWork: Boolean,
    remoteOptions: {
        hybrid: Boolean,
        inPerson: Boolean,
        remote: Boolean,
        tempRemote: Boolean
    },
    created: {
        type: Date,
        default: Date.now
    }
});