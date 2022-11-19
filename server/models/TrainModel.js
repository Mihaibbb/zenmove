const mongoose = require("mongoose");

const trainDeviceSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },

    trainNumber: {
        type: String,
        required: true
    }
});

const TrainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    trainDevices: {
        type: [trainDeviceSchema]
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

    nextTrainId: {
        type: String
    },

    nextArrive: {
        type: Number
    }

});

const TrainModel = mongoose.model("Train", TrainSchema);

module.exports = TrainModel;