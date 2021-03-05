const WeatherService = require('../services/WeatherService');

module.exports = {
    all: async (req, res) => {
        let json = {error:'', result:[]};
        
        let weathers = await WeatherService.getAll();

        for(let i in weathers) {
            json.result.push({
                period: weathers[i].period,
                weather: weathers[i].weather,
                
            });
        }

        res.json(json);
    },
};