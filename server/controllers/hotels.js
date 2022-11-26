const axios = require("axios");

exports.getNearbyHotels = async (req, res) => {
    const { query, latitude, longitude } = req.body;
    const RADIUS = 1500, TYPE="hotels";

    try {
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${RADIUS}&type=${TYPE}&keyword="${query}"&key=${process.env.GOOGLE_API_KEY}`;
        const config = {
            method: 'get',
            url,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await axios(config);
        const data= await response.data;
        res.status(200).json({ 
            hotels: await data,
            success: true
        });

    } catch (e) {
        console.log(e);
        res.status(404).json({ success: false, message: "An error occurred" });
    }
};

exports.sorting = async (req, res) => {
    const { hotels, sortKeyword, order } = req.body;

    if (sortKeyword === 'rating') {
        let newHotels = hotels;
        if (order) newHotels.sort((a, b) => b - a);
        else newHotels.sort((a, b) => a - b);
        res.status(200).json({
            success: true,
            hotels: newHotels
        });
    } else if (sortKeyword === 'opened') {
        const newHotels = hotels.filter(hotel => {
            return hotel.opening_hours.open_now;
        });

        res.status(200).json({
            success: true,
            hotels: newHotels
        });
    } else if (sortKeyword === 'price') {
        let newHotels = hotels
        if (order) newHotels.sort((a, b) => b - a);
        else newHotels.sort((a, b) => a - b);
        res.status(200).json({
            success: true,
            hotels: newHotels
        });
    }


};

