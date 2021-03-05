const LocalService = require('../services/LocalService');

module.exports = {
    all: async (req, res) => {
        let json = {error:'', result:[]};
        
        let locales = await LocalService.getAll();

        for(let i in locales) {
            json.result.push({
                name: locales[i].name,
                state: locales[i].state,
                latitude: locales[i].latitude,
                longitude: locales[i].longitude
            });
        }

        res.json(json);
    },
    one: () => {

    },
};