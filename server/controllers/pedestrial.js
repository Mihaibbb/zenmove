const vehicles = {
    bus: require("../models/BusModel"),
    taxi: require("../models/TaxiModel"),
    train: require("../models/TrainModel"),
    tramway: require("../models/TramwayModel")
};

const distanceCalculator = require("../DistanceGeolocation/DistanceGeolocation");

exports.getCloseRoutes = async (req, res, next) => {
    const { vehicle, longitude, latitude } = req.query;
    const vehicleModel = vehicles[vehicle];

    try {
        const data = await vehicleModel.find();
        const routes = await data.routes;
        
        const distances = await routes.map((route) => distanceCalculator(latitude, longitude, route.latitude, route.longitude));
        const distancesSorted = await distances.sort((a, b) => b - a);
        
        res.status(200).json({ success: true, distances: distancesSorted });
    } catch (e) {
        console.log(e);
        res.status(404).json({ success: false });
    }
};

