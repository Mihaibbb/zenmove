const BusModel = require("../models/BusModel");

exports.registerDevice = async (req, res, next) => {
    const { route, busName, deviceId } = req.body;
    
};

exports.removeDevice = async (req, res, next) => {
    const { route, deviceId } = req.body;
    
};

exports.editDevice = async (req, res, next) => {
    
};
