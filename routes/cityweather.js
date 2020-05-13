const express = require('express');
const router = express.Router();
const cityweather = require('../controllers/cityweather');

router.get('/', cityweather.getWeather);
router.post('/submit', cityweather.postCity);

module.exports = router;
