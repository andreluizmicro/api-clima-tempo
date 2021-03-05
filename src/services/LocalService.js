const db = require('../config/database');

let locales = [
    {
      "id": 3735,
      "name": "Osasco",
      "state": "SP",
      "latitude": -23.5320,
      "longitude": -46.7920
    },
    {
      "id": 3477,
      "name": "São Paulo",
      "state": "SP",
      "latitude": -23.5480,
      "longitude": -46.6360
    },
    {
      "id": 3478,
      "name": "Itajubá",
      "state": "MG",
      "latitude": -23.5480,
      "longitude": -46.6360
    },
    {
      "id": 3479,
      "name": "Santa Rita",
      "state": "MG",
      "latitude": -23.5480,
      "longitude": -46.6360
    }
];

module.exports = {
    getAll: () => {
            //console.log(locales);
            //result = global.connection.collection("locales").find({});
            //return console.log(db.findLocales());
            return locales;
    }
};