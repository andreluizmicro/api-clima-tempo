const mongoClient = require("mongodb").MongoClient;
mongoClient.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`, 
                    { useUnifiedTopology: true },
                    (error, connection) => {
                        if(error) return console.log(error);
                        global.connection = connection.db(process.env.DB_NAME);
                        console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`);        
                    });                    

function findLocales(callback){
    return global.connection
                 .collection("locales")
                 .find({})
                 .toArray();
}

module.exports = { findLocales }                    
                    