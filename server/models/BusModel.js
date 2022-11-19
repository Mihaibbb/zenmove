const mongoose = require("mongoose");

const busDeviceSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },

    busNumber: {
        type: String,
        required: true
    }
});

const BusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true,
    },
    
    country: {
        type: String, 
        required: true
    },
    
    busDevices: {
        type: [busDeviceSchema]
    },

    latitude: {
        type: Number,
        required: true
    },

    longitude: {
        type: Number,
        required: true
    },

    nextBusId: {
        type: String
    },

    nextArrive: {
        type: Number
    }

});

const BusModel = mongoose.model("Bus", BusSchema);
module.exports = BusModel;