exports.mostRatedRestaurants = async (req, res) => {
    const { latitude, longitude } = req.body;
    try {
        
        const new_latitude = latitude + 1.05;
        res.status(200).json({ success: true, latitude: new_latitude });
    } catch (e) {
        res.status(404).json({ succes: false, latitude: new_latititude })
    }
 
};