const express = require('express');
const router = express.Router();

const LocalController = require('./controllers/localController');
const WeatherController = require('./controllers/weatherController');

/**
 * ROUTES LOCALES
 */
router.get('/locales', LocalController.all);
router.get('/local/:id', LocalController.one);

/**
 * ROUTES WEATHERS
 */
router.get('/weathers', WeatherController.all);

module.exports = router;    