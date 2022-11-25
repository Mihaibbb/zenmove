const mongoose = require("mongoose");

module.exports = async () => {

    const connectionParams = {
        useNewUrlParser: true,
    };
    
    try {
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("CONNECT!");

        
    } catch (e) {
        console.log(e);
    }
};