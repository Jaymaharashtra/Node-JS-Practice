
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017/';
// const database = 'insta';
// const client = new MongoClient(url);

// async function getData(){

//         let conn = await client.connect();
//         let databaseName = conn.db(database);
//         let result = databaseName.collection('reels');
//         let response = await result.find({ }).toArray(); 

//         console.log(response);

// }
// getData();


// const {MongoClient} = require('mongodb'); // import mongoDB Client
// const url = 'mongodb://localhost:27017/';
// const dbName = 'insta'; 
// const client  = new MongoClient(url);

// async function getData(){
	
// 	let connect = await client.connect(); // connection with mongodb client
// 	let databaseCon = connect.db(dbName); // database
// 	let dbCollection = databaseCon.collection('reels'); //indicate collection
// 	let display =await dbCollection.find({ }).toArray(); // mongoDB Query 

// 	console.log(display); // Display the result

// }

// getData(); //Function Called