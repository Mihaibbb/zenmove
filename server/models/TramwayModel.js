const mongoose = require("mongoose");

const tramwayDeviceSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },

    tramwayNumber: {
        type: String,
        required: true
    }
});

const TramwaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    tramwayDevices: {
        type: [tramwayDeviceSchema]
    },

    city: {
        type: String,
        required: true,
    },
    
    country: {
        type: String, 
        required: true
    },

    latitude: {
        type: Number,
        required: true
    },

    longitude: {
        type: Number,
        required: true
    },

    nextTramwayId: {
        type: String
    },

    nextArrive: {
        type: Number
    }

});

const TramwayModel = mongoose.model("Tramway", TramwaySchema);

module.exports = TramwayModel;