const router = require('express').Router();
const { 
    getCloseRoutes
} = require("../controllers/pedestrial");

router.get("/get-close-routes", getCloseRoutes);

module.exports = router;