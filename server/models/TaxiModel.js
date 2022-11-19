const mongoose = require("mongoose");

const taxiDeviceSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },

    taxiNumber: {
        type: String,
        required: true
    }
});

const TaxiSchema = new mongoose.Schema({
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
    
    taxiDevices: {
        type: [taxiDeviceSchema]
    },

    latitude: {
        type: Number,
        required: true
    },

    longitude: {
        type: Number,
        required: true
    },

    nextTaxiId: {
        type: String
    },

    nextArrive: {
        type: Number
    }

});

const TaxiModel = mongoose.model("Taxi", TaxiSchema);
module.exports = TaxiModel;