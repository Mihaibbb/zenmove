const BusModel = require("../models/BusModel");

exports.getRoute = async (req, res, next) => {
    try {
        const routes = await BusModel.find({});
        res.status(200).json({ success: true, routes });
    } catch (e) {
        console.log(e);
        res.status(404).json({ success: false });
    }
};

exports.addRoute = async (req, res, next) => {
    
};

exports.removeRoute = async (req, res, next) => {

};

exports.addLocation = async (req, res, next) => {

};

exports.editLocation = async (req, res, next) => {

};


exports.removeLocation = async (req, res, next) => {

};
