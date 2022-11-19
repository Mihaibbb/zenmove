const router = require("express").Router();

const { 
    addRoute,
    removeRoute,
    addLocation,
    editLocation,
    removeLocation,
} = require("../controllers/bus");

router.post("/add-route", addRoute);
router.delete("/remove-route/:routeId", removeRoute);
router.post("/add-location", addLocation);
router.put("/edit-location", editLocation);
router.delete("/remove-location/:locationId", removeLocation);

module.exports = router;