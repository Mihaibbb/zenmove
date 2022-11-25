const router = require('express').Router();
const { 
    getCloseRoutes,
    getDistanceAndArriveTime
} = require("../controllers/pedestrial");

router.get("/get-close-routes", getCloseRoutes);
router.post("/calculate-distance", getDistanceAndArriveTime);

module.exports = router;