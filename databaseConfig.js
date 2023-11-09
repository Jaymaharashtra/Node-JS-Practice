const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'insta';
const client = new MongoClient(url);

async function connectDb(){
    let connection =await client.connect();
    let databseConn = connection.db(dbName);
    return databseConn.collection('reels');
}

module.exports= connectDb;