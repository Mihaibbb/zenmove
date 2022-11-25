const vehicles = {
    bus: require("../models/BusModel"),
    taxi: require("../models/TaxiModel"),
    train: require("../models/TrainModel"),
    tramway: require("../models/TramwayModel")
};

const axios = require("axios");

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

exports.getDistanceAndArriveTime = async (req, res) => {
    const { initLat, initLng, finalLat, finalLng } = req.body;
    console.log("hereee", process.env.GOOGLE_API_KEY);
    try {
        const headers = {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
            'X-Goog-FieldMask': 'originIndex,destinationIndex,duration,distanceMeters,status,condition',
        }
        
        const json_data = {
            'origins': [
                {
                    'waypoint': {
                        'location': {
                            'latLng': {
                                'latitude': initLat,
                                'longitude': initLng,
                            },
                        },
                    },
                    'routeModifiers': {
                        'avoid_ferries': true,
                    },
                },
            ],
            'destinations': [
                {
                    'waypoint': {
                        'location': {
                            'latLng': {
                                'latitude': finalLat,
                                'longitude': finalLng,
                            },
                        },
                    },
                },
                
            ],
            'travelMode': 'DRIVE',
            'routingPreference': 'TRAFFIC_AWARE',
        }
        
        const request = await axios.post('https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix', headers, json_data)
        const response = await request.json();
        console.log(await response);
        res.status(200).json({ success: true, res: await response });
        
    } catch (e) {
        console.log(e);
    }
};  