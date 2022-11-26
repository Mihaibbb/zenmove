const axios = require("axios");
const getDistance = require("../DistanceGeolocation/DistanceGeolocation");

exports.getPlaces = async () => {
    const { latitude, longitude, filter, order, query } = req.body;
    const RADIUS = 3000;
    const TYPE = "hotels";
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${RADIUS}&type=${TYPE}&keyword="${query}"&key=${process.env.GOOGLE_API_KEY}`;

    try {
        const options = {
            method: 'get',
            url
        };
        const response = await axios(options);
        const data = await response.data;
        res.status(200).json({ 
            data: getFilterData(data, filter, order, latitude, longitude),
            success: true
        });
    } catch (e) {
        console.log(e);
    }

    
};


const getFilterData = (data, filter, order, latitude, longitude) => {
    if (filter === "") return data;
    else if (filter === "distance") 
        return data.sort((a, b) => getDistance(latitude, longitude, a.geometry.location.lat, a.geometry.location.lng) - getDistance(latitude, longitude, b.geometry.location.lat, b.geometry.location.lng));
    
    else if (filter === "rating") 
        if (order) return data.sort((a, b) => a.rating - b.rating);
        else return data.sort((a, b) => b.rating - a.rating);
        
    else if (filter === "price") 
        if (order) return data.sort((a, b) => a.price_level - b.price_level);
        else return data.sort((a, b) => b.price_level - a.price_level);
        
};

