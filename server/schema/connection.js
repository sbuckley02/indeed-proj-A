
const mongoose = require('mongoose');
const uri = `mongodb+srv://admin:${process.env.DB_PW}@indeedacluster.oelcs8f.mongodb.net/?retryWrites=true&w=majority`;
const options = {

}
mongoose.connect(uri, options)
