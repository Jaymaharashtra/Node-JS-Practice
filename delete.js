const connectDb = require('./databaseConfig');

const deleteData =async () =>{
    let conn = await connectDb();
    let query = await conn.deleteOne({'followers':'689k'});
    console.log(query);
}
deleteData();