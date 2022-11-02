import userModel from './schema/user-schema';
import applicationModel from './schema/application-schema';
import organizationModel from './schema/organization-schema';

const mongoose = require('mongoose');
require("dotenv").config()
const uri = `mongodb+srv://admin:${process.env.DB_PW}@indeedacluster.oelcs8f.mongodb.net/?retryWrites=true&w=majority`;
const options = {

}

export function start(app) {
    try {
        mongoose.connect(uri, options)
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        });
    } catch (error) {
        console.error(error);
        process.exit(1);    
    }
    

}

